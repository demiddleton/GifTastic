$(document).ready(function () {
    //Declare global variables
    var input = $("#input");
    var submit = $("#submit");
    var imageArea = $("#image-area");
    var btnArea = $("#button-area");

    var apiKey = "EszsuuswazSR3Ju6qajA3q6Ro9AV9C0p";

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

        //Empty input box
       

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
    button.on("click", function (event) {

        imageArea.empty();

    //Create click function to animate the gif when the image is clicked


});