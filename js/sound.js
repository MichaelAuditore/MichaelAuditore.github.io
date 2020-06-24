/* 1. Search */

var UI = {}

UI.pressEnter = function (e) {
    var input = document.querySelector(".input-search");
    input.addEventListener("keyup", function (e) {
        if (e.which == 13)
            SoundCloudAPI.getTrack(input.value);
    });
}

UI.submitClick = function () {
    var input = document.querySelector(".input-search").value;
    var button = document.querySelector(".js-submit");
    button.addEventListener("click", function () {
        SoundCloudAPI.getTrack(input);
    });

}
UI.cleanlist = function () {
    var button = document.querySelector("input[type=button]");
    button.addEventListener("click", function () {
        var sideBar = document.querySelector(".js-playlist");
        sideBar.innerHTML = "";
        localStorage.clear();
    });
}
UI.pressEnter();
UI.submitClick();
UI.cleanlist();
/* 2. Query Soundcloud API */
SoundCloudAPI = {};

SoundCloudAPI.init = function () {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d',
        redirect_uri: 'http://api.soundcloud.com'
    });
}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function (inputValue) {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        genres: inputValue
    }).then(function (tracks) {
        SoundCloudAPI.renderTracks(tracks);
    });

}

/* 3. Display the cards */
SoundCloudAPI.renderTracks = function (tracks) {

    tracks.forEach(function (track) {
        var searchResults = document.querySelector(".js-search-results");
        //card
        var card = document.createElement('div');
        card.classList.add("card");

        //image
        var imageDiv = document.createElement('div');
        imageDiv.classList.add("image");

        var image_img = document.createElement('img');
        image_img.classList.add("image_img");
        image_img.src = track.artwork_url || "css/themes/default/assets/images/default.jpg";


        imageDiv.appendChild(image_img);

        //content
        var content = document.createElement('div');
        content.classList.add("content");

        var header = document.createElement('div');
        header.classList.add('header');
        header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';

        //button
        var button = document.createElement('div');
        button.classList.add("ui", "bottom", "attached", "button", "js-button");


        button.addEventListener("click", function () {
            SoundCloudAPI.getEmbed(track.permalink_url);
        });

        var icon = document.createElement("i");
        icon.classList.add("add", "icon");

        var buttonText = document.createElement("span");
        buttonText.innerHTML = "Add to playList";

        content.appendChild(header);

        button.appendChild(icon);
        button.appendChild(buttonText);

        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(button);

        searchResults.appendChild(card);
    });

}
/* 4. Add to playlist and play */
SoundCloudAPI.getEmbed = function (trackURL) {
    SC.oEmbed(trackURL, {
        auto_play: true
    }).then(function (embed) {
        var sideBar = document.querySelector(".js-playlist");
        var box = document.createElement("div");
        box.innerHTML = embed.html;
        sideBar.insertBefore(box, sideBar.firstChild);
        localStorage.setItem("Key", sideBar.innerHTML);
    });
}
var sideBar = document.querySelector(".js-playlist");
sideBar.innerHTML = localStorage.getItem("Key");
