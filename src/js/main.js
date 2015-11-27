var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";
var map;
var pos_marker;

var all_cuisines = ["American", "Breakfast", "Burgers", "Chicken", "Chinese", "Curry", "Desserts", "English", "Fish & Chips", "Greek", "Grill", "Healthy", "Ice Cream", "Indian", "Italian", "Japanese", "Kebab", "Lebanese", "Mediterranean", "Mexican", "Milkshakes", "Mongolian", "Oriental", "Persian", "Pizza", "Sandwhiches", "Scottish", "Spanish", "Sushi", "Tapas", "Thai", "Vegetarian", "Wraps"];


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
    }

    google.maps.event.addListener(pos_marker, 'dragend', function(){
        set_location_text();
    });

    $("#set-new-location").click(function(){
        geolocate();
    });


    set_location_text();

}

var toggle_map = function(){
    map_div = $("#map");
    var visibility = map_div.css("visibility");

    if (visibility == "hidden"){
        map_div.css("visibility","visible")
            .hide()
            .slideDown("slow");
        $("#set-location-text > span").removeClass("fa-caret-down").addClass("fa-caret-up");
    }
    else {
        map_div.slideUp("slow", function(){
            $(this).css("visibility", "hidden");
        });
        $("#set-location-text > span").removeClass("fa-caret-up").addClass("fa-caret-down");
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

    $("#pinboard").on("drop", function(event){drop(event.originalEvent)})
                  .on("dragover", function(event){drag_over(event.originalEvent)});

    $(".set-location").click(function(){
        toggle_map();
    });

    $("#generate-results").click(function(){
        for(var [key,value] of tag_map.entries()){
            $( "#text" ).append("<br>" + key + ": " + value);
        }
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
