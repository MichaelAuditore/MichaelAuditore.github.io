/* 1. Grab the input */
var input = "";
document.querySelector(".js-go").addEventListener('click', function () {
    input = document.querySelector("input").value;
    search(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
    input = document.querySelector("input").value;

    if (e.which === 13) {
        search(input);
    }
});
/* 2. do the data stuff with the API */
function search(input) {
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=WDD40mvj0E3se21BL9zdjviFH2AR1ZBL"
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        pushToDOM(data);
    });
}
/* 3. Show me the GIFs */

function pushToDOM(input) {
    var container = document.getElementsByClassName("js-container")[0];
    var response = JSON.parse(input);
    var content = "";
    container.innerHTML = content;
    var imageUrls = response.data;
    imageUrls.forEach(function (image) {
        var src = image.images.fixed_height.url;
        content += "<img src=\"" + src + "\"class=\"container-image\">";
        
        document.getElementById("waitimage").style.display = "block";

        setTimeout(function () {
            document.getElementById("waitimage").style.display = "none";
            container.innerHTML = content;
        }, 1000);
    });
}



