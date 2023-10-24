$(function() {

let listData=[];
  
    $("#search").on("keyup",function(){
        const testInput=$(this).val().toLowerCase();
        const suggestionId=$("#suggestionslist");
          suggestionId.empty();
          if(testInput.length===0){
            suggestionId.hide();
            return;
          }
          const matchingArray=listData.filter(d =>d.firstName.toLocaleLowerCase().includes(testInput));
          if(matchingArray.length===0){
            suggestionId.append("<li>matching Not Found</li>");
          }else{
            matchingArray.forEach(function(matchItem){
                   const listItem=$("<li class=list-group-item>").text(matchItem.firstName);
                   listItem.on("click",function(){
                    $("#search").val(matchItem.firstName);
                    suggestionId.hide();
                   });
                   suggestionId.append(listItem);

            });
            suggestionId.show();
          }
    });

    // $(document).on("click", function(e) {
    //     if (!$(e.target).closest(".autocomplete").length) {
    //         $("#suggestionslist").hide();
    //     }
    // });


    //Ajax call
    (function(){
        $.ajax({
            type: "get",
            url: "https://dummyjson.com/users",
            success: function (response) {
                 // console.log(response.users);
                   var obj=response.users;
                   listData=obj;
                   console.log(listData[0].firstName);
               
               
               // console.log(JSON.parse(response));
            },
            error: function ( error) {
                console.log(error);
            }
        });
    })();
});
