(function($, undefined){

    var collection = [{id:2, task : 'Rostyk', status:false},{id:2, task : 'Rostyk', status:false},{id:2, task : 'Rostyk', status:false},{id:2, task : 'Rostyk', status:false}],
        idTask=0; 
    function enterTask(event)
    {
        if(event.keyCode === 13 )
        {
            idTask++;
            var value = $('input').val();
            showTask({id: idTask, task : value, status : false});
            collection.push({id: idTask, task : value, status : false});
            $('input').val('');

        }
    }
    function createInput (){
        var div = $('<div>').attr({
            'id': 'enterTask',
            'class': 'enterTaskDiv'
        });

        var input = $('<input>').attr({
            'id': 'input',
            'class': 'input',
            'placeholder': 'What needs to be done?'
        });
        var listTasks = $('<div>').attr({
            'id': 'listTasks'
        });
        input.on('keydown', enterTask);
        div.append(input);
        $('#wrapper').append(div);
        $('#wrapper').append(listTasks);
        
    };

    function showTask(obj){
        var container = $('<div>').attr({
            'id' : 'oneTask' + obj.id,
            'class': 'oneTask'
        });

        var checkbox = $('<input>').attr({
            'id': 'checkbox' + obj.id,
            'class': 'checkbox',
            'type' : 'checkbox',
            'checked' : obj.status
        });

        var div = $('<div>').attr({
            'id' : 'task' + obj.id,
            'class': 'task'
        });

        div.text(obj.task);

        var button = $('<button>').attr({
            'id' : 'button' + obj.id,
            'class': 'button'
        });
        button.text('R');


        container.append(checkbox);
        container.append(div);
        container.append(button);

        $('#listTasks').append(container);

    }

    function showAll(array)
    {
        $('#listTasks').text('');
        for(var i = 0; i < array.length; i++)
        {
            showTask(array[i]);
        }
    }
    $(function(){
       createInput();

       showAll(collection);
    });
})(jQuery); 