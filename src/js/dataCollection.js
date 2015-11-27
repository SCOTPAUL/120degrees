

//KNOWN ISSUES
//for the last results, they are not ordered properly by associativeScore
//about a third of the results are not displayed, due to going over the google quota limit

	//global variables, because who needs good coding practice
	var coordinates = {lat: 55.8735672, lng: -4.2925851}; //will need to get this from the marker
	var radius = 5000; //global radius - default to 1km
	var tags = ["Indian","doner kebabs","fine Indian cuisine","Balbir","top notch","amazing","Near"]; //this is where the tags go
	var tagValues = [1,1,1,1,1,1,.2] //this is where each tag is given a weight from -1 to 1, should be same length as tags
	var otherTags = []; //should remain [], will be used later
	var otherTagValues = [];
	var metrics = ["Cheap","Expensive","Near","Far","Highly-Rated"]; //need to list all possible cuizine types here
	var detailedResult; //because I don't understand scope in javascript. used in function callback
	var sortedResults = [];
	var googleResults = [];
	var done;
	var cuizineTypes = ["American", "Breakfast", "Burgers", "Chicken", "Chinese", "Curry", "Desserts", "English", "Fish & Chips", "Greek", "Grill", "Healthy", "Ice Cream", "Indian", "Italian", "Japanese", "Kebab", "Lebanese", "Mediterranean", "Mexican", "Milkshakes", "Mongolian", "Oriental", "Persian", "Pizza", "Sandwhiches", "Scottish", "Spanish", "Sushi", "Tapas", "Thai", "Vegetarian", "Wraps"];
	
function getTagsFromMap(map){
	tags = Object.keys(map);
	for (int i = 0; i < tags.length; i++){
		tagValues.push(map[tags[i]]);
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
	
function initMap() {
	//this is where the data collection starts
	//uses global variable tags
  var coordinates = coordinates; //will need to get this from the marker
	var selectedCuizines = [];
	for (var i = 0; i < tags.length; i++){
		if (contains(cuizineTypes,tags[i])) {
			selectedCuizines.push(tags[i]);
		}
		else {
			otherTags.push(tags[i]); 
			otherTagValues.push(tagValues[i]);
		}
	}
	googleSearch(selectedCuizines,coordinates);	
}

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
			}
			if (result.added == undefined){
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
			
			document.getElementById('list').innerHTML += '<div class="box">' + sortedResults[i].name + "<br>" + rating + "<br>" + price + "<br>" + sortedResults[i].associativeScore + "</div>";
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