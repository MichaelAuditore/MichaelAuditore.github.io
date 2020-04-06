$(document).ready(menu());

var contador = 1;

function menu() {
    $('#menu').click(function () {
        if (contador == 1) {
            $(".nav-res").addClass('responsive-nav');
            $("#nav").addClass("height-nav");
            $(".data-res").addClass('responsive-data');
            $(".layer-flex").addClass("top-flex");
            $("ul.container li").addClass('display_li');
            $("#nav .container").addClass("responsive-menu");
            contador = 0;
        } else {
            $(".nav-res").removeClass('responsive-nav');
            $(".data-res").removeClass('responsive-data');
            $("#nav").removeClass("height-nav");
            $(".layer-flex").removeClass("top-flex");
            $("ul.container li").removeClass('display_li');
            $("#nav .container").addClass("responsive-menu");
            contador = 1;
        }
    });
}
function navigation(id) {
    $('#menu a').href = id;
    $(".nav-res").removeClass('responsive-nav');
    $(".data-res").removeClass('responsive-data');
    $(".layer-flex").removeClass("top-flex");
    $("#nav").removeClass("height-nav");
    $("ul.container li").removeClass('display_li');
    $("#nav .container").addClass("responsive-menu");
    contador = 1;
}