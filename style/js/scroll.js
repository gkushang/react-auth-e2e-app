
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

