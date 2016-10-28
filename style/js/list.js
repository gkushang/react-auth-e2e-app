
$('a').click(function() {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
});
