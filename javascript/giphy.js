$(document).ready(function () {
    //Declare global variables
    var input = $("#input");
    var submit = $("#submit");
    var imageArea = $("#image-area");
    var btnArea = $("#button-area");

    //Declare variable to hold array of topics
    var topics = ["Bristletails", "Antlion", "Zygentoma", "Caddisflies", "Dobsonflies", "Scale Insect", "Net-winged Insects", "Booklice", "Orthoptera", "Pteryota", "Odonata", "Caelifera"];

    //Create function to get user input and push it to the topics array

    submit.on("click", function (event) {

        event.preventDefault();
        btnArea.empty();

        inputValue = document.getElementById('input').value;
        topics.push(inputValue);
        console.log(topics);

        //Create button for new input value
        createBtns(inputValue);

    })

    //Create function to display the array of buttons on the page
    function createBtns() {

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
        // "this" keyword refers to the button that was clicked
        var insect = $(this).attr("data-name");
        console.log(insect);

        // Constructing a URL to search Giphy for the name of the insect
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + insect + "&api_key=EszsuuswazSR3Ju6qajA3q6Ro9AV9C0p&limit=10";

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
                var imgUrl = result[i].images.fixed_height_still.url;
                console.log(imgUrl);
                img.attr("src", imgUrl);
                imageArea.append(img);
            }

        });

    })
    //Create click function to animate the gif when the image is clicked


})