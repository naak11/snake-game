class Snake {
    construct() {
        this.x = 40;
        this.y = height / 2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.green = 255;
        this.red = 0;
        this.blue = 0;
        this.total = 1;
    }
    track() {
        let ts = Trackx.length - 1;
        console.log(Trackx[ts], Tracky[ts]);
    }
    update() {
        for (let i = 0; i < this.total; i++) {
            fill(this.red, this.green, this.blue)
            let tss = i + 1;
            let tk = Trackx.length - tss;
            rect(Trackx[tk], Tracky[tk], cls);
        }
        this.x = this.x + this.xspeed * cls;
        this.y = this.y + this.yspeed * cls;
    }
    dir(ty, tx) {
        this.xspeed = tx;
        this.yspeed = ty;
    }
    show() {
        fill(this.red, this.green, this.blue)
        rect(this.x, this.y, cls);
    }
    reset() {
        this.x = 20;
        this.y = height / 2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.total = 1;
        apple.construct()
    }
    die() {
        background(255, 0, 0);
        fill(255);
        textSize(100);
        textAlign(CENTER);
        text("Game Over", 0, 0, windowWidth, windowHeight);
        this.x = 100000000000000;
        this.y = 100000000000000;
    }
    eat(food) {
        food.construct();
        this.total = this.total + 1;
    }
}
class Apple {
    construct() {
        this.x = int(random(0, width / cls)) * cls;
        this.y = int(random(0, height / cls)) * cls;
        this.red = 255;
        this.green = 0;
        this.blue = 0;
    }
    show() {
        fill(this.red, this.green, this.blue);
        rect(this.x, this.y, cls);
    }
}
