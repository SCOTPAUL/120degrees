var get_parsed_data = function () {
    return Papa.parse(csv_data, {
        newline: "",
        header: true
    });
};

$(document).ready(function(){
    // Example usage
    var data = get_parsed_data().data;
    var i;

    for(i = 0; i < data.length; ++i){
        console.log(data[i].BusinessName);
    }
});
