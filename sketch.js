  let y = 200;
  let x = 20;
  let speed = 5;
  let snake1;
  let i = 20;

  function setup() {
    createCanvas(400, 400);
    snake1 = new snake();
    snake1.show()
  }

  function draw() {
    background(0);
    
    //make the snake appear
    snake1.show()
    
    //check which key is pressed
    if (keyCode === 38 || keyCode === 87) {
      snake1.moveUp()
    } else if (keyCode === 40 || keyCode === 83) {
      snake1.moveDown();
    } else if (keyCode === 39 || keyCode === 68) {
      snake1.moveRight();
    } else if (keyCode === 37 || keyCode === 65) {
      snake1.moveLeft();
    } else if (keyCode === 82 || keyCode === 32) {
      snake1.reset();
    } else if (keyCode === 80 || keyCode === 13) {
      snake1.stop();
    } else {
      return false;
    }
  }