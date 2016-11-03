
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

$('.copyButton').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(btn, message) {
    $(btn).tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide');
    }, 1000);
}

var clipboard = new Clipboard('.copyButton');

clipboard.on('success', function(e) {
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
    setTooltip(e.trigger, 'Press ⌘-C to Copy');
    hideTooltip(e.trigger);
});