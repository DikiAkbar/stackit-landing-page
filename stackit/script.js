// modal
 $('#signin-modal').on('shown.bs.modal', function () {
});

// scroll
$('.js-scroll-trigger').on('click', function(e) {

var ongoing = $(this).attr('href');

var ongoingElement = $(ongoing);

$('html , body').animate({
scrollTop: ongoingElement.offset().top - 90
});

e.preventDefault();
});