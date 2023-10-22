$(function () {
    $("#search").on("keyup",function(){
        var value=$(this).val().toLowerCase();
        $("li").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1);
        });
    });
  
    $("button").click(function(){
        $.ajax({
            type: "get",
            url: "https://dummyjson.com/users",
            success: function (response) {
                  console.log(response.users);
                   var obj=response.users;
                //    for(var o of obj){
                //     $(".list").text(o.address.address);
                //     console.log(o.address.address);
                //    }
                $.each(obj, function( index, value ) {
                    $("ol").append("<li class=list-group-item list-group-item-secondary>"+value.firstName+"</li>");
                    console.log(value.firstName);
                  })
               // console.log(JSON.parse(response));
            },
            error: function ( error) {
                console.log(error);
            }
        });
    })

});


    
