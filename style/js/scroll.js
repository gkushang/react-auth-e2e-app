
$(function() {
    $(window).scroll(function() {

        var top = $(document).scrollTop();

        console.log('top == ', top);
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

