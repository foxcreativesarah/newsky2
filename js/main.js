$( document ).ready(function() {
    // Handler for .ready() called.

    $("#summer").click(function() {         //use a class, since your ID gets mangled
        $(".main").addClass("summer");      //add the class to the clicked element
    });

    $("#winter").click(function() {         //use a class, since your ID gets mangled
        $(".main").addClass("winter");      //add the class to the clicked element
    });

    $(".home-btn").click(function() {            //use a class, since your ID gets mangled
        $(".main").removeClass("summer winter");           //add the class to the clicked element
    });




    //Modal handler
    $('#starsModal').on('show.bs.modal', function (event) {
        var modal = $(this);
        var button = $(event.relatedTarget); // Button that triggered the modal
        var title = button.data('title'); // Extract info from data-* attributes
        var meaning = button.data('meaning'); // Extract info from data-* attributes
        var contentURL = button.data('content'); // Extract info from data-* attributes
        var modalBody = modal.find('.modal-body');
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        modal.find('.modal-title').text(title);
        //Load
        modalBody.load(contentURL, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                console.log("External content loaded successfully!");
            if(statusTxt == "error")
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
        });

      });
});


 
  