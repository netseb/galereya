$(document).ready(function() {
    // some magic for the rainbow
    function showHiddenParagraphs() {
        $("p.hidden").fadeIn(500);
    }
    setTimeout(showHiddenParagraphs, 1000);

    var $nav = $('#nav'),
        $main = $('#main');

    function toggleNav() {
        $main.toggleClass('shifted');
        $nav.toggleClass('opened');
    }

    function scroll(e) {
        e.preventDefault();

        var hash = $(this).attr('href');

        toggleNav();
        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            location.hash = hash;
        });
    }

    $('#navToggle').click(toggleNav);
    $nav.find('li a').click(scroll);
});
