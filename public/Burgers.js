// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change").on("click", function(event) {
        
      var id = $(this).data("id");
      var isItDevoured = $(this).data("eaten");
       console.log(isItDevoured);
       console.log(id)
      var newDevoured = {
        devoured: isItDevoured
      };
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("changed devoured to", isItDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          BurgerName: $("#ca").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("The cook whipped up a new burger!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".delete").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });



    });
