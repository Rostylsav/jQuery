(function($, undefined){

    function createDiv (obj){
        var myDiv = $('<div>').attr({
            'id': obj.id,
            'class': 'div',
            'text': obj.text
        });

        $('#container').append(myDiv);
    };

    $(function(){
        $("#container").click( createDiv({id:1, text: 'Rostyk'}) );
    });
})(jQuery); 