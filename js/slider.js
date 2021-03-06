/* Get Button sliders  */
var action = {}

var current = document.querySelector(".inactive");
var next = document.querySelector(".active");

action.show = function (element) {
    element.classList.remove("inactive");
    element.classList.add("active");
}

action.hide = function (element) {
    element.classList.remove("active");
    element.classList.add("inactive");
}

action.skills = function () {
    action.removegraph();
    var hard = document.querySelector(".hard");
    var align = document.createElement("div");
    align.classList.add("align");
    align.classList.add("skills");
    var hskills =
        [
            { "name": "java", "src": "images/java.png" },
            { "name": "php", "src": "images/php.png" },
            { "name": "JavaScript", "src": "images/js.jpg" },
            { "name": "mysql", "src": "images/mysql.png" },
            { "name": "postgresql", "src": "images/postgresql.png" },
            { "name": "C", "src": "images/C.png" },
            { "name": "flutter", "src": "images/flutter.png" },
            { "name": "python", "src": "images/python.png" },
            { "name": "html", "src": "images/html.png" },
            { "name": "css", "src": "images/css.png" },
            { "name": "git", "src": "images/git.png" },
            { "name": "linux", "src": "images/linux.png" },
            { "name": "vim", "src": "images/vim.png" },
            { "name": "emacs", "src": "images/emacs.png" }
        ];

    hskills.forEach(function (object) {
        var img = document.createElement("img");
        img.src = object.src;
        img.alt = object.name;
        align.appendChild(img);
    });
    hard.appendChild(align);
}

action.graph = function () {
    action.removeskills();
    var chartDiv = document.querySelector('.hard');
    var div = document.createElement("div");
    div.classList.add("align");
    div.classList.add("graph");
    div.style.width = "100%";
    div.style.height = "300px";
    chartDiv.appendChild(div);


    url = 'https://docs.google.com/spreadsheets/d/1NdBgX5EPd-zhqUIOpm2exPBjeq5btrH0jC-wTlC8cC8/gviz/tq?range=A:B';
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.setOnLoadCallback(initialize);

    function initialize() {
        var query = new google.visualization.Query(url);
        query.send(handleQueryResponse);

        var options = {
            title: "Strong Abilities",
            animation: {
                duration: 1100,
                easing: "in",
                startup: true
            },
            legend: { position: 'top', textStyle: { color: 'black', fontSize: 16 }, },
            width: '100%',
            chartArea: { width: 400 },
            height: '50%',
            colors: ['black', '#282828'],
            vAxis: {
                ticks: [0, 25, 50, 75, 100],
            }
        }
        function handleQueryResponse(response) {
            var data = response.getDataTable();
            var chart = new google.visualization.ColumnChart(div);
            chart.draw(data, options);
        }
    }
}

action.removeskills = function () {
    let align = document.querySelector(".skills");
    if (align) {
        align.remove();
    }
}

action.removegraph = function () {
    let align = document.querySelector(".graph");
    if (align) {
        align.remove();
    }
}

next.addEventListener("click", function () {
    action.hide(next);
    action.show(current);
    action.removeskills();
    action.graph();
});

current.addEventListener("click", function () {
    action.hide(current);
    action.show(next);
    action.removegraph();
    action.skills();
});

action.skills();
/* Invert functions */
