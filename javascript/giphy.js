$(document).ready(function () {

    //Declare variable to hold array of topics
    var topics = ["Bristletails", "Antlion", "Zygentoma", "Caddisflies", "Dobsonflies", "Scale Insect", "Net-winged Insects", "Booklice", "Orthoptera", "Pteryota", "Odonata", "Caelifera"];

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