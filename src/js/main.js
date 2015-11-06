var get_parsed_data = function () {
    return Papa.parse(csv_data, {
        newline: "",
        header: true
    });
};

$(document).ready(function(){
    console.log(get_parsed_data());
});
