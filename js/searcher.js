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
    var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=WDD40mvj0E3se21BL9zdjviFH2AR1ZBL"
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
    container.innerHTML = "";
    var imageUrls = response.data;
    var i = 0;
    imageUrls.forEach(function (image) {
        i++;
        var src = image.images.fixed_height.url;
        
        
        document.getElementById("waitimage").style.display = "block";

        setTimeout(function () {
            document.getElementById("waitimage").style.display = "none";
            container.innerHTML += "<img src=\"" + src + "\"class=\"container-image\">";
        }, 800 * i);
    });
}



