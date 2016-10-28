$(function() {
    $(document).on('click', '.alert-close', function() {
        $(this).parent().toggle();
    })
});