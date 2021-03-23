  let snake1;  
  let y = 200;
  let x = 20;
  let speed = 5;
  let m;
  let n;
  let score = 0;
  function setup() {
    createCanvas(400, 400);
    snake1 = new snake();
    n = random(400);
    m = random(400);
    apple1 = new apple();
  }

  function draw() {
    background(0);

    //make an apple appear
    apple1.show()
    
    //make the snake appear
    snake1.show();
    
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
    if (x > m && y < n && x < m+20 && y > n-20 || x+20 > m && y-20 < n && x+20 < m+20 && y-20 > n-20) {
      apple1.showd("old");
    }
  }
