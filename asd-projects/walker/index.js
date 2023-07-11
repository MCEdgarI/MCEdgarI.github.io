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
  var positionX = 0;
  var speedX = 0;
  var positionY = 0;
  var speedY = 0;
   			
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keyDown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyUp' , handleKeyUp);
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
changeSpeedX(-5, event.which, KEY.LEFT);
changeSpeedX(5, event.which, KEY.RIGHT);
changeSpeedY(-5, event.which, KEY.UP);
changeSpeedY(5, event.which, KEY.DOWN);
}

  
function handleKeyUp(event) {
changeSpeedX(0, event.which, KEY.LEFT);
changeSpeedX(0, event.which, KEY.RIGHT);
changeSpeedY(0, event.which, KEY.UP);
changeSpeedY(0, event.which, KEY.DOWN);
  
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
