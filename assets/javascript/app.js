//    1st Page   Game Start
//header
//on.click start button

//event 1 - click start button

//       start button
// $("#start").on("click");

$(document).ready(function() {
  $("#start").click(function() {
    console.log("button clicked");
    function startCountdown() {
      alert("Results!");
    }
    setTimeout(startCountdown, 10000);

    var countdown = 30;
    var countdownDisplay;
    var countdownTimer;
    // "submit0" is the next button,
    // use "buttonsAuto" instead to include the back button as well
    var buttonID = "submit0";

    function countdownStart() {
      // Next button
      var button = document.getElementById(buttonID);
      // Create countdown element
      countdownDisplay = document.createElement("div");
      var cd = countdownDisplay;
      cd.style.display = "inline-block";
      cd.style.textAlign = "center";
      cd.style.fontWeight = "bold";
      cd.style.width = button.offsetWidth + "px";
      cd.style.height = button.offsetHeight + "px";
      // Init countdown
      button.parentNode.appendChild(countdownDisplay);
      countdownRefresh();
      // Hide next button
      button.style.display = "none";
      // Start countdown
      countdownTimer = window.setInterval(countDown, 1000);
    }

    function countDown() {
      if (countdown > 1) {
        countdown--;
        countdownRefresh();
      } else {
        window.clearTimeout(countdownTimer);
        // Display nextbutton
        var button = document.getElementById(buttonID);
        button.style.display = "";
        // Remove countdown
        button.parentNode.removeChild(countdownDisplay);
      }
    }
  });
});

// $(document)
//   .ready("#start")
  

//     2nd Page  Timer Counting Down and Quesions
//header
//timer

// $("start").on("click", timerStart);
// var timerStart;

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

// start = document.querySelector("#start");
// reset = document.querySelector("#reset");

//         div = $("#countdown");
//         pingSound = new Audio("http://www.sounddogs.com/previews/2220/mp3/402763_SOUNDDOGS__mu.mp3");
//         pingSound.preload = "auto"; //<- Optional but recommended

//         countdown = div.countdown360({
//             radius: 50,
//             seconds: 30,
//             fontColor: '#FFFFFF',
//             autostart: false,
//             onComplete: function () {
//                 pingSound.play();
//             }
//         });

//         countdown.start(); //This right here is for showing the clock on load.
//         countdown.stop();

//         start.onclick = function () {
//             startCountdown(countdown);
//         }
//         reset.onclick = function () {
//             setSeconds(countdown, 0);
//         }

// var timerStart=html

// function startTimer(){
//     var counter = 5;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('sorry, out of time');
//           clearInterval(counter);
//       }
//     }, 1000);
//   }

//   $("#start").click(function(){
//       startTimer();
//   });

// Trivia Form
// question 1
