$(document).ready(function(){

    $("#feedbackForm").submit(function(e){

        e.preventDefault();

        let name = $("#name").val();

        let recommendation = $("#recommend").val();

        alert(
            "Thank You " + name +
            "!\nFeedback Submitted Successfully.\nRecommended: " +
            recommendation.toUpperCase()
        );

        $("#feedbackForm")[0].reset();

    });

});