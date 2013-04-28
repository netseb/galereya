//Turn off highlighting for old IEs
window.detachEvent('onload', Rainbow.color);

$(document).ready(function() {
    // some magic for the rainbow
    function showHiddenParagraphs() {
        $("p.hidden").fadeIn(500);
    }
    setTimeout(showHiddenParagraphs, 1000);

    var $nav = $('#nav'),
        $main = $('#main'),
        $navToggle = $('#navToggle');

    function toggleNav() {
        $main.toggleClass('shifted');
        $nav.toggleClass('opened');
        $navToggle.toggleClass('shifted');
    }

    function scroll(e) {
        e.preventDefault();

        var hash = $(this).attr('href');

        toggleNav();
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {
            location.hash = hash;
        });
    }

    $('#navToggle').click(toggleNav);
    $nav.find('li a').click(scroll);
});
