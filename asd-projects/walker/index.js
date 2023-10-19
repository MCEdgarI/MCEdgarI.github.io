/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  
  var FRAMES_PER_SECOND_INTERVAL= 1000 / 60;
  var BOARD_WIDTH = $('#board').width();
  var B0ARD_HEIGHT = $(window).height();
  var KEY = {
    "LEFT" : 37,
    "UP": 38,
    "RIGHT" : 39,
    "DOWN" : 40,
  }
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  };

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup' , handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // update the position of the gameitem
    //check for collisions
    repositionBox();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
//press the up key --> accelerate the box in negative Y direction
//press the down key --> accelerate the box in the positive Y direction
//and so on for left (-x) and right (+x)
console.log(event.which);
if (event.which === KEY.LEFT) {
  console.log("left pressed");
}
if (event.which === KEY.RIGHT) {
  console.log("right pressed");
}
if (event.which === KEY.UP) {
  console.log("up pressed");
}
if (event.which === KEY.DOWN) {
  console.log("down pressed");
}



}

  
function handleKeyDown(event) {
  if (event.which === KEY.LEFT) {
    walker.speedX = -5;
  }
  if (event.which === KEY.RIGHT) {
    walker.speedX = 5;
  }
  if (event.which === KEY.UP) {
    walker.speedY = -5;
  }
  if (event.which === KEY.DOWN) {
    walker.speedY = 5;
  }
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionBox(){
  positionX += speedX;
  $('#walker').css("left" , positionX);
  positionY += speedY;
  $('#walker').css("top" , positionY);

}
  function changeSpeedX(newSpeed, keycode, arrowKey){
    if(keycode === arrowKey){
      speedX = newSpeed;
  }
}
  function changeSpeedY(newSpeed, keycode, arrowKey){
    if(keycode === arrowKey){
      speedY = newSpeed;
    }
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
