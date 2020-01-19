$(function create_table() {
    $.getJSON("./data/old-edge-win10-data.json", function (data) {
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