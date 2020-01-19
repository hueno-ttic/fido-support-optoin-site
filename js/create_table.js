function create_option_table(path, data_set_name) {
    $.getJSON(".//"+path+"/"+data_set_name+".json", function (data) {
        var fido_data = document.getElementById(data_set_name);
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
}