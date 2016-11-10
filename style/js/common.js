
$(function() {
    $(window).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 30) {
            $('.navbar').removeClass('navbar-default');
            $('.navbar').addClass('navbar-inverse');
        }
        else {
            $('.navbar').removeClass('navbar-inverse');
            $('.navbar').addClass('navbar-default');
        }
    });
});

$(".challenge-list-group").click(function(e) {
    e.preventDefault();
    // Do your stuff
});

$(".security-list-group").click(function(e) {
    e.preventDefault();
    // Do your stuff
});

$('.challenge-list-group-item').on('click', function(e) {
    var $this = $(this);
    $('.challenge-list-group').find('.active').removeClass('active');
    $this.addClass('active');
});

$('.security-list-group-item').on('click', function(e) {
    var $this = $(this);
    $('.security-list-group').find('.active').removeClass('active');
    $this.addClass('active');
});

$(function() {
    $(document).on('click', '.alert-close', function() {
        $(this).parent().toggle();
    })
});

$('a').click(function() {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
});

$(function () {
    $("[data-toggle = 'tooltip']").tooltip();
    $('.tooltip-create-user').tooltip({title: "Hooray!", delay: {show: 500, hide: 100}});
});