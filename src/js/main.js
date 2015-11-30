var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";
var map;
var pos_marker;

var all_cuisines = ["American", "Breakfast", "Burgers", "Chicken", "Chinese", "Curry", "Desserts", "English", "Fish & Chips", "Greek", "Grill", "Healthy", "Ice Cream", "Indian", "Italian", "Japanese", "Kebab", "Lebanese", "Mediterranean", "Mexican", "Milkshakes", "Mongolian", "Oriental", "Persian", "Pizza", "Sandwhiches", "Scottish", "Seafood", "Spanish", "Sushi", "Tapas", "Thai", "Vegetarian", "Wraps"];


var initMap = function() {
    var latlng = {lat: 55.8628, lng: -4.2542}

    map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12,
        streetViewControl: false,
        mapTypeControl: false

    });

    pos_marker = new google.maps.Marker({
        position: latlng,
        map: map,
        draggable: true,
        title: 'Location'
    });

    var geocoder = new google.maps.Geocoder;
    var set_location_text = function(){
        reverseGeocodeMarker(geocoder, map, $("#location"));
    };

    var geolocate = function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
                pos_marker.setPosition(latlng);
                map.setCenter(latlng);
                set_location_text();
            });
        }
    };

    google.maps.event.addListener(pos_marker, 'dragend', function(){
        set_location_text();
    });

    $("#set-new-location").click(function(){
        geolocate();
    });


    set_location_text();

};

var toggle_map = function(){
    var map_div = $("#map");
    var visibility = map_div.css("visibility");

    if (visibility == "hidden"){
        map_div.css("visibility","visible")
            .hide()
            .slideDown("slow");
        $("#set-location-text").find("> span").removeClass("fa-caret-down").addClass("fa-caret-up");
    }
    else {
        map_div.slideUp("slow", function(){
            $(this).css("visibility", "hidden");
        });
        $("#set-location-text").find("> span").removeClass("fa-caret-up").addClass("fa-caret-down");
    }
};

var get_user_location = function(){
    return pos_marker.getPosition();
};

var format_location_name = function(result){
    if(result.address_components.length >= 3){
        var component = result.address_components;
        return component[0].short_name + " " + component[1].short_name + ", " + component[2].short_name;
    }

    return result.formatted_address;
};

var reverseGeocodeMarker = function(geocoder, map, textbox){
    textbox.text("Finding Location...");

    var pos = get_user_location();
    geocoder.geocode({'location': pos}, function(results, status){
        if(status == google.maps.GeocoderStatus.OK){
            if(results[0]){
                textbox.text(format_location_name(results[0]));
            }
        }
    });

};


$(document).ready(function(){
    // Example usage
    var i;

    $("#pinboard, #cuisines, #metrics, #search-results").on("drop", function(event){drop(event.originalEvent)})
                                                        .on("dragover", function(event){drag_over(event.originalEvent)});

    $(".set-location").click(function(){
        toggle_map();
    });

    $("#generate-results").click(function(){
        /*
        for(var [key,value] of tag_map.entries()){
            $( "#text" ).append("<br>" + key + ": " + value);
        }*/
        algorithm(tag_map);
    });

    $("#search-form").submit(function(event){
        event.preventDefault();

        var query = $("#search-input").val();
        search(query);
        $(this).trigger("reset");
    });

    var display_cuisines = ["American",
                   "Chinese",
                   "Fish & Chips",
                   "Indian",
                   "Italian",
                   "Japanese",
                   "Kebab",
                   "Pizza",
                   "Seafood",
                   "Vegetarian"];

    var metrics = ["Cheap",
                  "Expensive",
                  "Near",
                  "Far",
                  "Highly Rated",
                  "Vegan",
                  "Halal",
                  "Nut-Safe",
                  "Friendly Staff",
                  "Service Speed"];

    display_cuisines.forEach(function(value){
        createDTag($("#cuisines"), value, "cuisineTag");
    });

    metrics.forEach(function(value){
        createDTag($("#metrics"), value, "metricTag");
    });

});

//KNOWN ISSUES
//for the last results, they are not ordered properly by associativeScore
//about a third of the results are not displayed, due to going over the google quota limit

//global variables, because who needs good coding practice
var coordinates; //will need to get this from the marker
var radius = 5000; //global radius - default to 5km
var tags = []; //this is where the tags go
var tagValues = []; //this is where each tag is given a weight from -1 to 1, should be same length as tags
var otherTags = []; //should remain [], will be used later
var otherTagValues = [];
var metrics = ["Cheap","Expensive","Near","Far","Highly-Rated"]; //need to list all possible cuisine types here
var detailedResult; //because I don't understand scope in javascript. used in function callback
var sortedResults = [];
var googleResults = [];
var done;
var searchMap;

function algorithm(hashmap){
    
    function getTagsFromMap(hashmap){
        
        for(var key of tag_map.keys()){
            tags.push(key);
            tagValues.push(tag_map.get(key));
        }
    }
        
    //code taken from user brad on http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
    function contains(array, obj) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === obj) {
                return true;
            }
        }
        return false;
    }

    // from http://www.movable-type.co.uk/scripts/latlong.html
    function getDistance(a,b){
        var lat1 = a.lat*Math.PI/180;
        var lat2 = b.lat*Math.PI/180;
        var dlat = (lat2 - lat1)*Math.PI/180;
        var dlon = (b.lng - a.lng)*Math.PI/180;
        
        var R = 6371000; // metres
        var a = Math.sin(dlat/2) * Math.sin(dlat/2) +
                Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(dlon/2) * Math.sin(dlon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        return d;
        
    }
        
    //start
        //this is where the data collection starts
        //uses global variable tags
    getTagsFromMap(hashmap);
    coordinates = {'lat' : get_user_location().lat(), 'lng' : get_user_location().lng()}; //will need to get this from the marker
    var selectedCuizines = [];
    for (var i = 0; i < tags.length; i++){
        if (contains(all_cuisines,tags[i]) && tagValues[i] > 0) {
            selectedCuizines.push(tags[i]);
        }
        else {
            otherTags.push(tags[i]); 
            otherTagValues.push(tagValues[i]);
        }
    }
    googleSearch(selectedCuizines,coordinates);    

    function sortByScore(a,b) {
    //code based on answer by users Wogan and Web_Designer on http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
      if (a.associativeScore < b.associativeScore)
        return 1;
      if (a.associativeScore > b.associativeScore)
        return -1;
      return 0;
    }

    function callback(results, status, pagination) { //here we need to generate the associative score for each place and pass results to the hexagons
    //uses global variables otherTags, otherTagValues, detailedResult
    // some code taken from user Gaby aka G. Petrioli at http://stackoverflow.com/questions/27725187/google-places-api-how-do-i-fetch-the-reviews
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        googleResults = results;
        
        var service = new google.maps.places.PlacesService(new google.maps.Map(document.getElementById('map')));
        for (var i = 0; i < results.length; i++) {
            var request = {
                placeId: results[i].place_id 
            };
            //pro hax: only a certain amount of data is returned from places search. answer: search again once per restaurant for more data
            service.getDetails(request,detailedCallback);
        }
        if (pagination.hasNextPage){ //check for more results
            pagination.nextPage();
        } else {
            done = true;
        }
            
      }
    }

    function detailedCallback(result,status){
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            if (!result.permanently_closed){
                result.associativeScore = 0;
                for (var j = 0; j < otherTags.length; j++){
                    var tagScore = 0.0; //each tag will add a value to the associativeScore from -1 to 1, which will then be multiplied by the tag
                    var coordinates2 = {lat: result.geometry.location.lat(), lng: result.geometry.location.lng()};
                    //console.log(coordinates);
                    result.distance = getDistance(coordinates2,coordinates);
                    //start by checking designated metrics tags
                    if (contains(metrics,otherTags[j])){
                        if (otherTags[j] == "Cheap") {
                            if (result.price_level != undefined) { tagScore = (((result.price_level-4) * -1)/4)*otherTagValues[j]; }
                        } else if (otherTags[j] == "Expensive") {
                            if (result.price_level != undefined) { tagScore = (result.price_level/4)*otherTagValues[j]; }
                        } else if (otherTags[j] == "Near") {
                            if (result.geometry.location != undefined) {
                                tagScore += (((result.distance-(radius/2))*-1)/(radius/2))*otherTagValues[j];
                            }
                        } else if (otherTags[j] == "Far") {
                            if (result.geometry.location != undefined) {
                                tagScore = (((result.distance-(radius/2)))/(radius/2))*otherTagValues[j];
                            }
                        } else if (otherTags[j] == "Highly-Rated") {
                            if (result.rating != undefined) { tagScore = (result.rating/5)*otherTagValues[j]; }
                        }
                    }
                    //then parse reviews for other tags
                    else {
                        var reviews = result.reviews;
                        if (reviews != undefined){
                            for (var k = 0; k < reviews.length; k++){
                                if (reviews[k].text.search(otherTags[j]) != -1){
                                    tagScore++;
                                }
                            }
                            tagScore /= reviews.length;
                            tagScore *= otherTagValues[j];
                        }
                    }
                result.associativeScore += tagScore;
                console.log(" ");
                }
                if (result.added == undefined){
                    if (result.associativeScore > 1) { result.associativeScore = 1; }
                    else if (result.associativeScore < -1) { result.associativeScore = -1; }
                    sortedResults.push(result);
                    result.added = true;
                }
            }
            if (done) {
                var moreSortedResults = sortedResults.sort(sortByScore);
                displayResults(moreSortedResults);
            }
        }
    }

    //@param sortedResults: array of google search results sorted by associative score, each with additional attribute .associativeScore used for colors
    function displayResults(sortedResults){
        for (var i = 0; i < sortedResults.length; i++) {
            if (sortedResults[i].printed == undefined) {
                var price = "";
                var rating = "";
                if (sortedResults[i].rating != undefined) {rating = sortedResults[i].rating+"*";}
                if (sortedResults[i].price_level != undefined) {price = sortedResults[i].price_level+"£";}
                document.getElementById('text').innerHTML += '<div class="box">' + sortedResults[i].name + "<br>" + rating + "<br>" + sortedResults[i].associativeScore + "</div>";
                //replace above line with display hexagon
                sortedResults[i].printed = true;
            }
        }
    }

    //function for the preliminary google search - assigning associative scores comes later
    //@param selectedCuizines: string array denoting cuizine keywords eg ['indian','chinese',etc]
    //@param location: tuple {lat: double, lng: double}
    function googleSearch(selectedCuizines, location) {
        var service = new google.maps.places.PlacesService(new google.maps.Map(document.getElementById('map')));
        var cuizines = "";
        if (selectedCuizines.length==1) cuizines = selectedCuizines[0];
        else if (selectedCuizines.length>1){
            for (var i = 0; i < selectedCuizines.length; i++){
                cuizines += "(" + selectedCuizines[i] + ")";
                if (i+1 != selectedCuizines.length) {cuizines += " OR ";}
            }
        }
      service.nearbySearch({
        location: coordinates,
        radius: radius,
        types: ['food','cafe'],
        keyword: cuizines
      }, callback);
    }
    
    
}




