function loadTable() {
    n_row = localStorage.getItem("n_row");
    n_col = localStorage.getItem("n_col");

    newTable = document.getElementById('newTable');
    newTable.innerHTML = "";

    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    
    for (var i = 0; i < n_row; i++){
        var row = document.createElement('tr');
        for (var j = 0; j < n_col; j++){
            var column = document.createElement('td');
            var text = document.createElement('input');
            text.type = 'text';
            text.id = "field_" + i + "_" + j;
            if (text.id in localStorage) {
                text.value = localStorage.getItem(text.id);
            } else {
                text.value = "";
            }
            column.appendChild(text);
            row.appendChild(column);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    
    var heading = document.createElement('h3');
    heading.innerHTML = "Загруженная таблица";

    var saveButton = document.createElement('button');
    saveButton.innerHTML = "Сохранить";
    saveButton.onclick = function () {
        localStorage.clear();
        localStorage.setItem("n_row", n_row);
        localStorage.setItem("n_col", n_col);
        for (var i = 0; i < n_row; i++){
            for (var j = 0; j < n_col; j++){
                var key = "field_" + i + "_" + j;
                var value = document.getElementById(key).value;
                localStorage.setItem(key, value);
            }
        }
        alert("Сохранено");
    };

    var clearButton = document.createElement('button');
    clearButton.innerHTML = "Очистить";
    clearButton.onclick = function () {
        localStorage.clear();
        for (var i = 0; i < n_row; i++){
            for (var j = 0; j < n_col; j++){
                var key = "field_" + i + "_" + j;
                document.getElementById(key).value = "";
            }
        }
        alert("Очищенно");
    };

    newTable.appendChild(heading);
    newTable.appendChild(table);
    newTable.appendChild(saveButton);
    newTable.appendChild(clearButton);
    return false;
}