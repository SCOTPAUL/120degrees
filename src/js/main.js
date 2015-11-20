var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";
var map;
var pos_marker;

var get_parsed_data = function () {
    return Papa.parse(csv_data, {
        newline: "",
        header: true
    });
};

function initMap() {
    var latlng = {lat: 55.8628, lng: -4.2542}
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 14
    });
    
    pos_marker = new google.maps.Marker({
        position: latlng,
        map: map,
        draggable: true,
        title: 'Location'
    });
}

var toggle_map = function(){
    map_div = $("#map");    
    var visibility = map_div.css("visibility");

    if (visibility == "hidden"){
        map_div.css("visibility","visible")
            .hide()
            .slideDown("slow");        
        $(".set-location").html("Set Location &#9650;");
    }
    else {
        map_div.slideUp("slow", function(){
            $(this).css("visibility", "hidden");
        });
        $(".set-location").html("Set Location &#9660;");
    }
}


var get_user_location = function(){
    return pos_marker.getPosition();
}

$(document).ready(function(){
    // Example usage
    var data = get_parsed_data().data;
    var i;

    for(i = 0; i < data.length; ++i){
        console.log(data[i].BusinessName);
    }
    
    
    $(".set-location").click(function(){
        toggle_map();
    });    
});
