var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";
var map;
var pos_marker;

var initMap = function() {
    var latlng = {lat: 55.8628, lng: -4.2542}

    map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12
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

    google.maps.event.addListener(pos_marker, 'dragend', function(){
        set_location_text();
    });

    var geolocation_permission = false;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
            pos_marker.setPosition(latlng);
            map.setCenter(latlng);
            set_location_text();
            geolocation_permission = true;
        });
    }

    if(!geolocation_permission){
        set_location_text();
    }
}

var toggle_map = function(){
    map_div = $("#map");
    var visibility = map_div.css("visibility");

    if (visibility == "hidden"){
        map_div.css("visibility","visible")
            .hide()
            .slideDown("slow");
        $("#set-location-text").html("Set Location &#9650;");
    }
    else {
        map_div.slideUp("slow", function(){
            $(this).css("visibility", "hidden");
        });
        $("#set-location-text").html("Set Location &#9660;");
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

    $(".set-location").click(function(){
        toggle_map();
    });
    
    $("#search-form").submit(function(event){
        event.preventDefault();
        
        var query = $("#search-input").val();
        search(query);
        $(this).trigger("reset");
        
    });
    
    
    var cuisines = ["American",
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
    
    cuisines.forEach(function(value){
        createDTag($("#cuisines"), value);
    });
    
    metrics.forEach(function(value){
        createDTag($("#metrics"), value);
    });
        

});
