// Question Array

var allQuestions = [
{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 1
},

{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 0
},

{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 2
},

{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 0
},

{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 1
},

{
  question: "What is the right answer?",
  choices: ["First", "Second", "Third"],
  correctAnswer: 1
},

];

// Testing this section



var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
      
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {
  
    $(".jumbotron").hide();
    $('#start').click(function() {
      $(".jumbotron").fadeIn();
      $(this).hide();
    });
  
    
  
    setupOptions();
  
    $("#done").click(function() {
      event.preventDefault();
      checkAns();
      currentquestion++;
     
      if (currentquestion < allQuestions.length) {
        setupOptions();
        if (currentquestion == allQuestions.length - 1) {
          $('#done').html("Submit");
          $('#done').click(function() {
            $(".jumbotron").hide();
            $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
            $("#result").fadeIn(1500);
          });
  
        };
  
      };
    });
  });
  

//    1st Page   Game Start
//header
//on.click start button

//event 1 - click start button

//       start button

$(document).on('click', "#start", function () {
      $(this).hide();

      console.log("button clicked!");
  
     
     
  
  });

  // Timer loads (from Stopwatch activity)
  window.onload = function() {
    $("#start").on("click", timer.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  var clockRunning = false;
  
  var timer = {
    time: 30,
  
    start: function() {
  
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      }
    },
   
    count: function() {
     
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
