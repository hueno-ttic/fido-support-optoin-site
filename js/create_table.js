$(function create_option_table() {
    var path = "data";
    var data_set = "old-edge-win10-data";
   // $.getJSON("./"+path+"/"+data_set, function (data) {
       
    $.getJSON("./data/old-edge-win10-data.js", function (data) {
        var fido_data = document.getElementById("old-edge-win10-data");
        var str = "";
        Object.keys(data).forEach(function (sub_column) {
            str += "<tr>";
            str += "<td rowspan=" + Object.keys(this[sub_column]).length + ">" + sub_column;
            Object.keys(this[sub_column]).forEach(function (value) {
                str += "<td>" + value + "</td>";
                str += "<td>" + this[value] + "</td>";
                str += "</tr>";
            }, this[sub_column]);
            str += "</td>";
        }, data);
        fido_data.innerHTML = str;
    });
});