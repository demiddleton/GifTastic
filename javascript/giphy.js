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

        //Empty Input Area
        
        
        createBtns(inputValue);
        
    })



    //Create function to display the array of buttons on the page
    function createBtns() {

        for (var i = 0; i < topics.length; i++) {
            var buttons = $("<button>").text(topics[i]);
            buttons.attr("data-name", topics[i])
            $("#button-area").append(buttons);
            console.log(buttons);
        }

    }
    createBtns();




    //Create a button click function to display 10 non-animated gifs and place them on the page

    //Create click function to animate the gif when the image is clicked


});