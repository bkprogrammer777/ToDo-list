
// Check off to-dos by clicking

// $("li").on("click", function(){
//     // if li is gray.... 
//     if($(this).css("color") === "rgb(128, 128, 128)"){              // <------ must use rgb(128, 128, 128) which is gray, for the if statement to work
//     // turn it black    
//     $(this).css({
//         color: "black",
//         textDecoration: "none",
//     });
//     }else{
//     // else, turn it gray
//     $(this).css({
//         textDecoration: "line-through",
//         color: "gray",
//     })
//     }
// });


// Above is code for the long way of striking through and turning gray the todo when clicked
// Instead, you can just create a .completed class in css.style sheet and add a .completed class

// Check off to-dos by clicking
$("ul").on("click", "li", function(){               
    $(this).toggleClass("completed");
});


// Click X to delete the to-do from the list
$("ul").on("click", "span", function(e){  
     $(this).parent().fadeOut(500, function(){      // <-------- add parent(), otherwise, only the <span>, i.e., the x, is removed
        $(this).remove();       
    });    
    e.stopPropagation;                              //<---------- Used to prevent event bubbling      
});


$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
    // grabbing new to-do text from input
     var toDoText = $(this).val();
     $(this).val("");                               // Used to clear the input box after hitting enter
     //create a new li and add to ul
      $("ul").append(`<li><span><i class="fa fa-trash-alt"></i></span> ${toDoText}</li>`)  
     

    }
});


$("#toggle-form").on("click", function(){
   $("input[type='text']").fadeToggle();

});