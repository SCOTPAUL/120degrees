var GOOGLE_MAPS_API_KEY = "AIzaSyDtHSNoJ5Ua1mHgdG_1pAX_RwBWvps_8ms";

var get_parsed_data = function () {
    return Papa.parse(csv_data, {
        newline: "",
        header: true
    });
};


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.8628, lng: 4.2542},
    zoom: 8
  });
}


$(document).ready(function(){
    // Example usage
    var data = get_parsed_data().data;
    var i;

    for(i = 0; i < data.length; ++i){
        console.log(data[i].BusinessName);
    }
});
