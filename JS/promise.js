window.onload = async function main() {
    var list = document.getElementById('todoList');
    var preloader = document.getElementById('preloader');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    
    await sleep(1000);

    var n = 5;
    loadTODO(table, -1);
    for (var i = 1; i < n; i++) {
        var number = getRandomNumber(200);
        loadTODO(table, number);
    }
    table.appendChild(tbody);
    list.appendChild(table);
    preloader.classList.remove('waiting');
    list.classList.remove('waiting');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function loadTODO(tbody, number) { 
    var address = 'https://jsonplaceholder.typicode.com/todos/' + number;
    fetch(address)
        .then(res => res.ok ? res : Promise.reject(res))
        .then((responce) => responce.json())
        .then((json) => {
            var row = document.createElement('tr');
            var column = document.createElement('td');
            column.textContent = json.title
            if (json.completed) {
                row.bgColor = '#33bb33'
            } else {
                row.bgColor = '#bb3333'
            } 
            row.appendChild(column);
            tbody.appendChild(row);
        })
        .catch(() => {
            var row = document.createElement('tr');
            var column = document.createElement('td');
            column.textContent = "⚠ Что-то пошло не так";
            row.bgColor = '#999999'
            row.appendChild(column);
            tbody.appendChild(row);
        });
}