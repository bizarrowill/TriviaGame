//    1st Page   Game Start
//header
//on.click start button

//event 1 - click start button

//       start button

$(document).on('click', "#start", function () {
  
      // var num = parseInt($(this).attr('data-random'));
  
      // previous += num;
  
      
  
      console.log("button clicked!");
  
      // if(previous > random_result){
      //     lost++;
      //     console.log("You Lost!");
  
      //     $("#lost").html("Losses: " + lost);
      //     previous = 0;
          
      //     resetAndStart();
      // }
      // else if(previous === random_result){
      //     win++;
      //     console.log("You Win!");
  
      //     $("#win").html("Wins: " + win);
          
      //     previous = 0;
      //     resetAndStart();
      // }
      // $("#previous").html("Total Score: " + previous);
      // console.log(previous);
     
  
  });

  // STOPWATCH ACTIVITY (SOLUTION)
  // =============================
  
  // This code will run as soon as the page loads
  window.onload = function() {
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  //prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var stopwatch = {
    time: 0,
    lap: 1,
  
    reset: function() {
      stopwatch.time = 0;
      stopwatch.lap = 1;
  
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");
  
      // DONE: Empty the "laps" div.
      $("#laps").text("");
    },
    start: function() {
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    recordLap: function() {
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
  
      // DONE: Add the current lap and time to the "laps" div.
      $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");
  
      // DONE: Increment lap by 1. Remember, we can't use "this" here.
      stopwatch.lap++;
    },
    count: function() {
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time++;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);
    },
    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - minutes * 60;
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
  

//     2nd Page  Timer Counting Down and Quesions
//header
//timer

	


// or

// function pretty_time_string(num) {
//   return ( num < 10 ? "0" : "" ) + num;
// }

// var start = new Date;    

// setInterval(function() {
// var total_seconds = (new Date - start) / 1000;   

// var hours = Math.floor(total_seconds / 3600);
// total_seconds = total_seconds % 3600;

// var minutes = Math.floor(total_seconds / 60);
// total_seconds = total_seconds % 60;

// var seconds = Math.floor(total_seconds);

// hours = pretty_time_string(hours);
// minutes = pretty_time_string(minutes);
// seconds = pretty_time_string(seconds);

// var currentTimeString = hours + ":" + minutes + ":" + seconds;

// $('.timer').text(currentTimeString);
// }, 1000);
  

// Trivia questions display on screen below timer
//radio inline buttons - using bootstrap or jQuery
// styleing center, background image

//record answer from user - check if correct - add to totals
// correct, incorrect, unanswered

//

// Done button -- stops timer and displays results

//    3rd Page   End-Reset Game

// replace Trivia Questions with results

// display header, background image
// Display All Done!
// Correct Answers:
// Incorrect Answers:
// Unanswered:

// option = reset game button to new quiz
// btnPlayAgain();
// $(document).on("click", "#btnReset", function() {
//  $("#btnReset").on("click", function() {
// resetGame();
// });

// How to make countdown timer start and display after button click
// What's easiest way to display inline radio buttons with jQ
// How to record user choices in radio buttons with correct answers

// Trivia Form
// question 1
