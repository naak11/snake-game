class snake {
  //how it looks
  show() {
    rect(x, y, 20)
    fill(255, 255, 255);
  }

  //action
  moveUp() {
    y = y - speed;
    x = x + 0
  }
  moveRight() {
    x = x + speed;
    y = y + 0;
  }

  moveLeft() {
    x = x - speed;
    y = y + 0;
  }

  moveDown() {
    y = y + speed;
    x = x + 0;
  }

  stop() {
    x = x + 0;
    y = y + 0;
  }

  reset() {
    x = 20;
    y = 200;
  }
}