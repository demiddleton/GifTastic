$(document).ready(function () {
    //Declare global variables
    var input = $("#input");
    var submit = $("#submit");
    var imageArea = $("#image-area");
    var btnArea = $("#button-area");

    //Declare variable to hold array of topics
    var topics = ["Pulp Fiction", "Lion King", "The Matrix", "Titantic", "Home Alone", "Forrest Gump", "Mrs. Doubtfire", "Aladdin", "Braveheart", "Waynes World", "Terminator 2"];
    //Create function to get user input and push it to the topics array

    submit.on("click", function (event) {

        event.preventDefault();
        btnArea.empty();

        inputValue = input.val().trim();
        topics.push(inputValue);
        console.log(topics);

        //Create button for new input value
        createBtns();
     
    })

    //Create function to display the array of buttons on the page
    function createBtns() {
        btnArea.empty();

        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>").text(topics[i]);
            button.attr("data-name", topics[i])
            $("#button-area").append(button);
            console.log(button);
        }

    }
    createBtns();

    //Create a button click function to display 10 non-animated gifs and place them on the page
    $("button").on("click", function () {
        imageArea.empty();


        var movie = $(this).attr("data-name");
        console.log(movie);

        // Constructing a URL to search Giphy for the name of the insect
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=EszsuuswazSR3Ju6qajA3q6Ro9AV9C0p&limit=10";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);

            //Display response on the page
            var result = response.data;
            console.log(result);

            for (var i = 0; i < result.length; i++) {
                var img = $("<img>");
                var stillImg = result[i].images.original_still.url;
                console.log(stillImg);

                var activeImg = result[i].images.original.url;
                console.log(activeImg);

                img.attr("src", stillImg);
                img.attr("data-still", stillImg);
                img.attr("data-animate", activeImg);
                img.attr("data-state", "still")
                img.addClass("gif");

                imageArea.append(img);

                var rating = result[i].rating;
                console.log(rating);

                var newDiv = $("<div>");
                imageArea.append(newDiv);
                newDiv.text(rating);

            }

            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            });
        });
    })
})