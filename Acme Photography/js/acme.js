// smooth scrolling
$('#view-work').on('click', function() {
    const header = $('#header').position().top

    $('html, body').animate({
        scrollTop: header
    }, 900)
})