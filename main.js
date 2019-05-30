// Please complete the below exercises preferrably using JQuery
$( document ).ready(function() { 
// 1. Make each item's paragraph collapse/expand when the title is clicked
$(document).on("click", '.title', function(event) { // need to bind click event to future generated items 
        $(this).nextAll('p').slideToggle("slow");
      });



// 2. Remove each item when we click on the closing X
$(document).on("click", '.close', function(event) { // need to bind click event to future generated items 
            $(this).parent().closest('.item').remove();
      })




// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

    $(document).on("click", '.add', function(event) { // need to bind click event to future generated items 
        event.preventDefault(); //if the (.add) button type was assigned 'submit' this would be necessary so adding it here as good practice in case it is changed in future
       
        var inputValue = $('#newtitle').val().trim();

        if( inputValue === ''){ //logic to check if input is empty and to reassign title
            var nextItemNumber = $('.item').length + 1;
            inputValue = 'Title ' +nextItemNumber;
        }
    
        var newItemDiv =   $('<div>').addClass('item');
        var titleH1 = $('<h1>').addClass('title').html( inputValue);
        var closeSpan = $('<span>').addClass('close').html('x');
        var descriptionP = $('<p>').addClass('description').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.')

        newItemDiv.append(titleH1).append(closeSpan).append(descriptionP).appendTo('.item-list');
        $('#newtitle').val('') //reset the input field to blank for next entry
    })


//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

// Optional functionality is implemented above
})