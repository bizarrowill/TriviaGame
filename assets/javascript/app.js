//    1st Page   Game Start
//header
//on.click start button

//event 1 - click start button

//       start button

$(document).on('click', "#start", function () {
      $(this).hide();
    
  
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

  // Timer loads (from Stopwatch activity)
  window.onload = function() {
    $("#start").on("click", timer.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  //prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var timer = {
    time: 30,
  
    start: function() {
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      }
    },
   
    count: function() {
      // DONE: increment time by 1, remember we cant use "this" here.
      timer.time--;
  
      // DONE: Get the current time, pass that into the timer.timeConverter function,
      //       and save the result in a variable.
      var converted = timer.timeConverter(timer.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#countdownTimer").text(converted);
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
