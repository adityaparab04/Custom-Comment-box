$(document).ready(function(){
    let input = $('#input').val();

    //comment using jquery
    $('#comment').click(function(){
        $('.box').append(input + '<br>');
        $('#input').val('');
        $('.box-container').slideDown();
    });

    //cancel the typed comment
    $('#cancel').click(function(){
        $('#input').val('');
    });

    //delete the typed comment
    $('#delete').click(function(){
        $('.box').text('');
        $('.box-container').slideUp();
    });
});