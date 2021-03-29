let snake;
let cls = 20;
let apple;
let Trackx = [];
let Tracky = [];
let something = 0;
let score;
let scored;
let frames = Trackx.length;
let gameSpeed = 10;
function setup() {
    createCanvas(Math.round((windowWidth - 20) / cls) * cls, Math.round((windowHeight - 90) / cls) * cls);
    frameRate(gameSpeed);
    snake = new Snake();
    snake.construct();
    apple = new Apple();
    apple.construct();
}

function draw() {
    for (let i = 1; i < score + 1; i++) {
        let tyiu = Trackx.length - i;
        if (snake.x === Trackx[tyiu] && snake.y === Tracky[tyiu]) {
            snake.die()
        }
    }
    background(0);
    apple.show();
    snake.show();

    Trackx.push(snake.x);
    Tracky.push(snake.y);

    snake.update();

    if (apple.x === snake.x && apple.y === snake.y) {
        snake.eat(apple);
        console.log(score);
    }

    if (snake.x < 0 || snake.x >= width || snake.y < 0 || snake.y >= height) {
        snake.die();
    }
    score = snake.total - 1;
    scored = document.getElementById("Score");
    scored.innerHTML = "Score: " + score;
}

function keyPressed() {
    if (snake.xspeed === 0 && snake.yspeed === -1) {
        if (keyCode == RIGHT_ARROW) {
            snake.dir(0, 1)
        } else if (keyCode == LEFT_ARROW) {
            snake.dir(0, -1)
        } else if (keyCode == 82) {
            snake.reset()
        } else {
            return false
        }
    } else if (snake.xspeed === 0 && snake.yspeed === 1) {
        if (keyCode == RIGHT_ARROW) {
            snake.dir(0, 1)
        } else if (keyCode == LEFT_ARROW) {
            snake.dir(0, -1)
        } else if (keyCode == 82) {
            snake.reset()
        } else if (keyCode == 82) {
            snake.reset()
        } else {
            return false
        }
    } else if (snake.xspeed === 1 && snake.yspeed === 0) {
        if (keyCode == UP_ARROW) {
            snake.dir(-1, 0);
        } else if (keyCode == DOWN_ARROW) {
            snake.dir(1, 0)
        } else if (keyCode == 82) {
            snake.reset()
        } else {
            return false
        }
    } else if (snake.xspeed === -1 && snake.yspeed === 0) {
        if (keyCode == UP_ARROW) {
            snake.dir(-1, 0);
        } else if (keyCode == DOWN_ARROW) {
            snake.dir(1, 0)
        } else if (keyCode == 82) {
            snake.reset()
        } else {
            return false
        }
    } else {
        if (keyCode == UP_ARROW) {
            snake.dir(-1, 0);
        } else if (keyCode == DOWN_ARROW) {
            snake.dir(1, 0)
        } else if (keyCode == RIGHT_ARROW) {
            snake.dir(0, 1)
        } else if (keyCode == LEFT_ARROW) {
            snake.dir(0, -1)
        } else if (keyCode == 82) {
            snake.reset()
        } else {
            return false
        }
    }
}
