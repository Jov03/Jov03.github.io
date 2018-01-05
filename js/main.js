console.log('i am active');
$('#videoEditingTile').click(function () {
    if (!$('#developingWork').is(':visible') && !$('#videos').is(':visible')) {
        $('#videos').fadeIn();
    } else if ($('#developingWork').is(':visible')) {
        $('#developingWork').fadeOut();
        $('#videos').fadeIn();



    } else {
        $('#videos').fadeOut();
    }

});
$('#developingTile').click(function () {
    if (!$('#developingWork').is(':visible') && !$('#videos').is(':visible')) {
        $('#developingWork').fadeIn();
    } else if ($('#videos').is(':visible')) {
        $('#videos').fadeOut();
        $('#developingWork').fadeIn();



    } else {
        $('#developingWork').fadeOut();
    }

});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        responsive: {
            600: {
                items: 1
            }
        }
    });
});
