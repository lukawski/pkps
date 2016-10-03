$(document).ready(function() {
    $('textarea').keydown(function() {
        var text = $(this).val(),
            match = text.match(/\n/g),
            breaks = match ? match.length : 2;
        
        $(this).attr('rows', breaks + 2);
    });
});