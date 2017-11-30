$(document).ready(function(){

    $('form').on('submit', function(){
      
        var name = $('#name').val();
        var todo = {name: name};
        $.ajax({
            type: 'POST',
            url: '/contact',
            data: todo,
            success: function(data){
            location.reload();
            },
            error:function(a, b , e){
                console.log(e);
            }
        });
       
    });

    $('li').on('click', function(){
        var item = $(this).text();
        $.ajax({
            type:'DELETE',
            url:'/contact/'+item,
            success: function(data){
                location.reload();
            }
        });
    });
});