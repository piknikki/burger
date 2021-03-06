

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to ", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
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




















//
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//
//         var id = $(this).data("id");
//         var newDevoured = $(this).data("newdevoured");
//
//         var newDevouredState = {
//             devoured: newDevoured
//         };
//
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newDevouredState
//         }).then(function() {
//             console.log("changed devoured state");
//             location.reload();
//         });
//     });
//
//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();
//
//         var newBurger = {
//             name: $("#bur").val().trim(),
//             devoured: $("[name=devoured]:checked").val().trim()
//         };
//
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(function() {
//             console.log("created new burger");
//             location.reload(); // this reloads the page to get the updated list
//         });
//     });
//
//     $(".delete-burger").on("click", function(event) {
//         var id = $(this).data("id");
//
//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(function() {
//             console.log("cleared the burger " + id)
//             location.reload();
//         });
//     });
// });
//
//











