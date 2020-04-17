/* Get Button sliders  */

var action = {}

var current = document.querySelectorAll(".slider-buttons ol li")[0];
var next = document.querySelectorAll(".slider-buttons ol li")[1];

action.prev = function (element) {
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

action.next = function (element) {
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
    var hard = document.querySelector(".hard");
    var align = document.createElement("div");
    align.classList.add("align");
    align.classList.add("graph");
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Hola Soy Miguel";
    align.appendChild(paragraph);
    hard.appendChild(align);
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
action.prev(current, next);
action.next(next, current);

/* Invert functions */

current.addEventListener("click", function () {
    action.prev(current);
    action.next(next);
});
next.addEventListener("click", function () {
    action.prev(next);
    action.next(current);
});