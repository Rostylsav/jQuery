(function($, undefined){

    function createButton(){
        var button = $('<button>').attr({
            'id' : 'button'
        });
        button.on('click',createForm);
        button.text('Show Form');

        $('#wrapper').append(button);
    }

    function createForm(){

        var parenDiv = $('<div>').attr({
            'id' : 'parentForm',
        });

        var div = $('<div>').attr({
            'id' : 'form',
        });

        var input = $('<input>').attr({
            'id' : 'input',
            'type' : 'text'
        });

        var button =  $('<button>').attr({
            'id' : 'showValue'
        });
        button.on('click', showValue);
        button.text('show value');


        div.append(input);
        div.append(button);
        parenDiv.append(div);
        $('#wrapper').append(parenDiv);
    }

    function showValue(){
        var div = $('<div>');
        div.text($('#input').val());
        $('#parentForm').remove();
        $('#wrapper').append(div);
    }

    $(function(){
        createButton();
    });
})(jQuery); 