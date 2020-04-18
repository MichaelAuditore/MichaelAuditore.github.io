/* Get Button sliders  */
$(window).resize(function () {
    var li = document.querySelectorAll(".slider-buttons ol li")[1];
    if (li.className === "active") {
        var list = document.querySelector(".hard .graph");
        if (list) {
            action.removegraph();
        }
        action.graph();
    }
});

var action = {}

var current = document.querySelectorAll(".slider-buttons ol li")[0];
var next = document.querySelectorAll(".slider-buttons ol li")[1];

action.show = function (element) {
    element.classList.remove("inactive");
    element.classList.add("active");
    if (element === current) {
        var list = document.querySelector(".hard .skills");
        if (!list) {
            action.skills();
        }
    }
    else {
        var list = document.querySelector(".hard .graph");
        if (!list) {
            action.graph();
        }
    }
}

action.hide = function (element) {
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
            { "name": "JavaScript", "src": "images/js.jpg" },
            { "name": "C", "src": "images/C.png" },
            { "name": "flutter", "src": "images/flutter.png" },
            { "name": "java", "src": "images/java.png" },
            { "name": "python", "src": "images/python.png" },
            { "name": "html", "src": "images/html.png" },
            { "name": "mysql", "src": "images/mysql.png" },
            { "name": "php", "src": "images/php.png" },
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
            animation: {
                duration: 1100,
                easing: "in",
                startup: true
            },
            legend: { position: 'top', textStyle: { color: 'black', fontSize: 16 } },
            width: '100%',
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
    var align = document.querySelector(".skills");
    if (align) {
        align.remove();
    }
}

action.removegraph = function () {
    var align = document.querySelector(".graph");
    if (align) {
        align.remove();
    }
}
action.show(current, next);
action.hide(next, current);

/* Invert functions */

current.addEventListener("click", function () {
    action.show(current);
    action.hide(next);
});
next.addEventListener("click", function () {
    action.show(next);
    action.hide(current);
});