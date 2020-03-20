$(document).ready(menu());

var contador = 1;

function menu() {

    $('#menu').click(function () {
        if (contador == 1) {
            $("#nav").addClass('responsive-nav');
            $(".layer-flex").addClass('responsive-layer-img');
            $(".container").addClass('responsive-menu');
            $("ul.container li").addClass('display_li');
            contador = 0;
        } else {
            $("#nav").removeClass('responsive-nav');
            $("ul.container li").removeClass('display_li');
            $(".layer-flex").removeClass('responsive-layer-img');
            $(".container").removeClass('responsive-menu');
            contador = 1;
        }

    });
}
function navigation(id) {
    $('#menu a').href = id;
    $("#nav").removeClass('responsive-nav');
    $("ul.container li").removeClass('display_li');
    $(".layer-flex").removeClass('responsive-layer-img');
    $(".container").removeClass('responsive-menu');
    contador = 1;
}