const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const width = canvas.clientWidth;
const height = canvas.clientHeight;

let size = 600 / 20;
let count_food = 5;

const img_food = new Image();
img_food.src = './images/food.png';

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reload() {
    snake.create();
}

let snake = {
    coordinates: {
        x: [],
        y: [],
    },
    route: '',
    canChangeRoute: true,
    isAlive: true,
    colorHead: "rgb(130, 0, 0)",
    colorTail: 'rgba(239,237,43,0.79)',
    create() {
        this.coordinates.x = [0];
        this.coordinates.y = [0];
        this.route = 'right';
        this.isAlive = true;
        step();
    },
    checkCageIsOccupied(x, y) {
        for (let i = 1; i < this.coordinates.x.length; i++) {
            if (x === this.coordinates.x[i] && y === this.coordinates.y[i]) {
                return true;
            }
        }
        return false;
    },
    checkDeath() {
        if (this.checkCageIsOccupied(this.coordinates.x[0], this.coordinates.y[0])) {
            alert('You are dead');
            return true;
        } else {
            return false;
        }
    },
    move() {
        for (let i = this.coordinates.x.length - 1; i > 0; i--) {
            this.coordinates.x[i] = this.coordinates.x[i - 1];
            this.coordinates.y[i] = this.coordinates.y[i - 1];
        }

        if (this.route === 'left')   this.coordinates.x[0]--;
        if (this.route === 'right')  this.coordinates.x[0]++;
        if (this.route === 'up')     this.coordinates.y[0]--;
        if (this.route === 'down')   this.coordinates.y[0]++;
    }
}

class FOOD {
    coordinates = {
        x: '',
        y: '',
    }
    constructor() {
        this.change();
    }
    change() {
        this.coordinates.x = rand(0, (width - size) / size);
        this.coordinates.y = rand(0, (height - size) / size);
        if (snake.checkCageIsOccupied(this.coordinates.x, this.coordinates.y)) {
            this.change()
        }
    }
}

const food = [];
for (let i = 0; i < count_food; i++) {
    food[i] = new FOOD();
}

snake.create();

function step() {
    //draw map
    for (let i = 0; i < Math.floor(height / size); i++) {
        for (let j = 0; j < Math.floor(width / size); j++) {
            if (j % 2 + i % 2 === 1) {
                ctx.fillStyle = 'rgba(3, 68, 17, 0.6)';
            }
            else {
                ctx.fillStyle = 'rgba(30, 88, 17, 0.6)';
            }
            ctx.fillRect(j * size, i * size, size, size);
        }
    }

    //draw snake
    ctx.fillStyle = snake.colorHead;
    ctx.beginPath();
        ctx.arc(snake.coordinates.x[0] * size + size / 2, snake.coordinates.y[0] * size + size / 2, size / 2, 0, Math.PI * 2)
    ctx.fill();

    //draw tail
    ctx.fillStyle = snake.colorTail;
    for (let i = 1; i < snake.coordinates.x.length; i++) {
        ctx.fillRect(snake.coordinates.x[i] * size, snake.coordinates.y[i] * size, size, size)
    }

    //draw food
    for (let i = 0; i < food.length; i++) {
        ctx.drawImage(img_food, food[i].coordinates.x * size + 3, food[i].coordinates.y * size + 3, size - 3, size - 3)
    }

    //eat
    for (let i = 0; i < food.length; i++) {
        if (snake.coordinates.x[0] === food[i].coordinates.x && snake.coordinates.y[0] === food[i].coordinates.y) {
            food[i].change();
            snake.coordinates.x.push(snake.coordinates.x[0]);
            snake.coordinates.y.push(snake.coordinates.y[0]);
        }
    }

    snake.move()

    let isDeath = snake.checkDeath();
    if (isDeath) {
        snake.isAlive = false;
    }


    //wall
    if (snake.coordinates.x[0] >= Math.floor(width / size)) snake.coordinates.x[0] = 0;
    if (snake.coordinates.x[0] < 0) snake.coordinates.x[0] = Math.floor(width / size) - 1;
    if (snake.coordinates.x[0] < 0) snake.coordinates.x[0] = Math.floor(width / size) - 1;
    if (snake.coordinates.y[0] >= Math.floor(height / size)) snake.coordinates.y[0] = 0;
    if (snake.coordinates.y[0] < 0) snake.coordinates.y[0] = Math.floor(height / size) - 1;

    snake.canChangeRoute = true;

    if (snake.isAlive) {
        setTimeout(() => {
            requestAnimationFrame(step);
        }, 70)
    }
}

document.addEventListener("keydown", e => {
    if (snake.canChangeRoute) {
        if ((e.code === "ArrowLeft" || e.code === "KeyA") && snake.route !== 'right') snake.route = "left";
        if ((e.code === "ArrowRight" || e.code === "KeyD") && snake.route !== 'left') snake.route = "right";
        if ((e.code === "ArrowDown" || e.code === "KeyS") && snake.route !== 'up') snake.route = "down";
        if ((e.code === "ArrowUp" || e.code === "KeyW") && snake.route !== 'down') snake.route = "up";
        snake.canChangeRoute = false;
    }
});
