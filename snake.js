class snake {
  //how it looks
  show() {
    fill(0, 255, 0);
    rect(x, y, 20);
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
class apple {
  //appear
  show(){
    fill(255,0,0);
    rect(m,n,20);
    
  }
}
