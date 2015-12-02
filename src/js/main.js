var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";
var map;
var pos_marker;

var all_cuisines = ["American", "Breakfast", "Burgers", "Chicken", "Chinese", "Curry", "Desserts", "English", "Fish & Chips", "Greek", "Grill", "Healthy", "Ice Cream", "Indian", "Italian", "Japanese", "Kebab", "Lebanese", "Mediterranean", "Mexican", "Milkshakes", "Mongolian", "Oriental", "Persian", "Pizza", "Sandwhiches", "Scottish", "Spanish", "Sushi", "Tapas", "Thai", "Vegetarian", "Wraps"];


var initMap = function() {
    var latlng = {lat: 55.8628, lng: -4.2542};

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


var spinner;

$(document).ready(function(){
    var i;

    $("#pinboard, #cuisines, #metrics, #search-results").on("drop", function(event){drop(event.originalEvent)})
                  .on("dragover", function(event){drag_over(event.originalEvent)});

    $(".set-location").click(function(){
        toggle_map();
    });

    // From https://fgnass.github.io/spin.js/
    $("#generate-results").click(function(){
        /*
		for(var [key,value] of tag_map.entries()){
            $( "#text" ).append("<br>" + key + ": " + value);
        }*/
        var opts = {
            lines: 13 // The number of lines to draw
            , length: 28 // The length of each line
            , width: 14 // The line thickness
            , radius: 42 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.25 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // Rounds per second
            , trail: 60 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , shadow: false // Whether to render a shadow
            , hwaccel: false // Whether to use hardware acceleration
            , position: 'relative' // Element positioning
        };
		var target = document.getElementById('results_display');
        spinner = new Spinner(opts).spin(target);
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
var metrics = ["Cheap","Expensive","Near","Far","Highly Rated"]; //need to list all possible cuizine types here
var detailedResult; //because I don't understand scope in javascript. used in function callback
var sortedResults = [];
var googleResults = [];
var ready = false;
var totalResults = 0;
var currentResultCount = 0;
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
	currentResultCount = 0;
	totalResults = 0;
	ready = false;
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

		totalResults += results.length;
		var service = new google.maps.places.PlacesService(map);
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
			ready = true;
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
						} else if (otherTags[j] == "Highly Rated") {
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
		}
		currentResultCount++;
		if (currentResultCount >= totalResults && ready){
			var moreSortedResults = sortedResults.sort(sortByScore);
			displayResults(moreSortedResults);
		}
	}

	//@param sortedResults: array of google search results sorted by associative score, each with additional attribute .associativeScore used for colors
	var data = [];
	function displayResults(sortedResults){
		for (var i = 0; i < sortedResults.length; i++) {
			if (sortedResults[i].printed == undefined) {
				var price = "";
				var rating = "";
				if (sortedResults[i].rating != undefined) {rating = sortedResults[i].rating+"*";}
				if (sortedResults[i].price_level != undefined) {price = sortedResults[i].price_level+"£";}
				//console.log(sortedResults[i].associativeScore);
                data.push([sortedResults[i].name, rating, price, sortedResults[i].associativeScore, sortedResults[i].website, sortedResults[i].url, sortedResults[i].formatted_phone_number]);
				console.log([sortedResults[i].name+" "+rating+" "+price+" "+sortedResults[i].associativeScore]);
				console.log(" ");
				sortedResults[i].printed = true;
			}
		}
		drawHexagons(data);
	}

	//function for the preliminary google search - assigning associative scores comes later
	//@param selectedCuizines: string array denoting cuizine keywords eg ['indian','chinese',etc]
	//@param location: tuple {lat: double, lng: double}
	function googleSearch(selectedCuizines, location) {
		var service = new google.maps.places.PlacesService(map);
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

function drawHexagons(data){
    if(spinner){
        spinner.stop();
    }
	d3.selection.prototype.moveToFront = function(){
    return this.each(function(){
	this.parentNode.appendChild(this);
    });
};

function mover(d) {
  var el = d3.select(this)
		.transition()
		.duration(10)
		.style("fill-opacity", 0.1)
		.style("width", width + 10)
		;
}

function mout(d){
	var el = d3.select(this)
	   .transition()
	   .duration(1000)
	   .style("fill-opacity", 1)
	   ;
}

//enlarge hexagon when it is clicked
var click = 0;
function mclick(d) {
	var e1 = d3.select(this)
	if (click == 0) {
		click = 1;
	    e1.transition()
		.attr("transform", "scale(1.75)")
		.attr("d", function (d) { return "M" + (d.x)/1.75 + "," + (d.y)/1.75 + hexbin.hexagon();});
		e1.moveToFront();


	svg.selectAll("g")
		.append("rect")
		.attr("width", 50)
		.attr("height", 30)
		.attr("x", (d.x - 40))
		.attr("y", (d.y + 20))
		.attr("fill", "gainsboro")
		.on("click", function(d, i){
			if (data[e1.attr("id").substring(1)][4] == undefined){
				alert("This place does not have a website.\n Phone number: " + data[e1.attr("id").substring(1)][6]);
			}
			else {
				window.open(data[e1.attr("id").substring(1)][4]);
			}
		})
		.moveToFront();

		//adds text to buttons
		button1Text = svg.selectAll("g")
		.append("text")
		.text("Order")
		.attr("x", (d.x - 25))
		.attr("y", (d.y + 40))
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.moveToFront();

	svg.selectAll("g")
		.append("rect")
		.attr("width", 50)
		.attr("height", 30)
		.attr("x", (d.x + 30))
		.attr("y", (d.y + 20))
		.attr("fill", "gainsboro")
		.on("click", function(d, i){
			//console.log(e1.attr("id").substring(1))
			window.open(data[e1.attr("id").substring(1)][5]);
		})
		.moveToFront();

		//adds text to buttons
		button2Text = svg.selectAll("g")
		.append("text")
		.text("Map")
		.attr("x", (d.x + 40))
		.attr("y", (d.y + 40))
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.moveToFront();


	}
	else {
		click = 0;
	    e1.transition()
		.attr("transform", "scale(1)")
		.attr("d", function (d) { return "M" + (d.x) + "," + (d.y) + hexbin.hexagon();});

	    svg.selectAll("rect").remove();
		button1Text.remove();
		button2Text.remove();
	}
}

var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 375 - margin.top - margin.bottom,
    rad = 75;

//Calculate the center positions of each hexagon
var points = [];
var rows = data.length/8;
var remainder = data.length % 8;
if(remainder != 0){
	rows++;
}
console.log("rows: " + rows);

var count = 0;
for (var i = 0; i < rows && count < data.length; i++) {
    for(var j = 0; j < 8 && count < data.length; j++){
    	points.push([rad * j * 1.75 + rad, (height * 0.5) + i*120]);
	    count++;
    }
}

console.log("count: "+count);
//make each hexagon a different shade
var color = d3.scale.linear()
    .domain([-1, 1])
    .range(["white", "steelblue"])
    .interpolate(d3.interpolateLab);

var hexbin = d3.hexbin()
	.size([width, height])
    .radius(rad);

var x = d3.scale.identity()
    .domain([0, width]);

var y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

var svg = d3.select("#results_display").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    console.log("W:"+width+" H:"+height);
//Draw the hexagons
svg.append("g")
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("path")
    .attr("class", "hexagon")
    .attr("id", function(d, i) { return "h" + i;})
    .style("fill", function(d, i) { return color(data[i][3]);})
    .attr("d", function (d) { return "M" + d.x + "," + d.y + hexbin.hexagon();})
    .on("mouseover", mover)
    .on("mouseout",mout)
    .on("click", mclick);

var xarray = [];
var yarray = [];
for(var k = 0; k < data.length; k++){
	var d = d3.select("#h" + k).attr("d");
	var newX;
	var newY;
	var startx = 1;
	var endx;
	var starty;
	var endy;
	for(var m = 0; m < d.length; m++){
		if (d.charAt(m) == ",") {
			endx = m;
			starty = m+1;
		}
		else if (d.charAt(m) == "m"){
			endy = m;
			break;
		}
 	}
	newX = d.substring(startx,endx);
	xarray.push(newX);
	newY = d.substring(starty,endy);
	yarray.push(newY);
}

//adds text to hexagon
svg.selectAll("g")
		mainText = svg.selectAll("g")
		.data(data)
		.enter()
		.append("text")
		.text(function(d, i) {
			console.log(data[i-1][0]);
			return data[i-1][0];
		})
		.attr("x", function(d, i) {
			return xarray[i-1];
		})
		.attr("y", function(d, i) {
			return yarray[i-1]-20;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("text-anchor", "middle");

		mainText = svg.selectAll("g")
		.data(data)
		.enter()
		.append("text")
		.text(function(d, i) {
            if (data[i-1][1] != ""){
			    return "Average Rating: " + data[i-1][1];
			}
			else return "";;
		})
		.attr("x", function(d, i) {
			return xarray[i-1];
		})
		.attr("y", function(d, i) {
			return yarray[i-1]-10;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("text-anchor", "middle");

		mainText = svg.selectAll("g")
		.data(data)
		.enter()
		.append("text")
		.text(function(d, i) {
			//console.log(data[i-1][2]);
            if (data[i-1][2] != ""){
				return "Price Rating: " + data[i-1][2] ;
			}
			else return "";
		})
		.attr("x", function(d, i) {
			return xarray[i-1];
		})
		.attr("y", function(d, i) {
			return yarray[i-1];
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("text-anchor", "middle");

};


}
