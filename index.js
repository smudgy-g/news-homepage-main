$(document).ready(function() {
    $('#open-menu').click(function() {
        $('#nav-menu').addClass('open');
        $('.overlay').removeClass('display-overlay');
    });

    $('#close-menu').click(function() {
        $('#nav-menu').removeClass('open');
        $('.overlay').addClass('display-overlay');
    })
});