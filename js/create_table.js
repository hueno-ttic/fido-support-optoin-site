$(function create_table(path, data_set) {
    $.getJSON("./"+path+"/"+data_set, function (data) {
        var fido_data = document.getElementById(data_set);
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