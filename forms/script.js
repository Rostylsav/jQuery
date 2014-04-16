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
        button.on('click', show);
        button.text('show value');


        div.append(input);
        div.append(button);
        div.show();

        parenDiv.append(div);

        $('#wrapper').append(parenDiv)


    }

    function show(){
        var div = $('<div>');
        div.text($('#input').val());
        $('#parentForm').remove();
        $('#wrapper').append(div);
    }

    $(function(){
        createButton();
    });
})(jQuery); 