const dinoImgRight = document.createElement('img');
dinoImgRight.src = './images/trex.png';
const dinoImgLeft = document.createElement('img');
dinoImgLeft.src = './images/trex-left.png';

class Dino {
    constructor(canvasContext, positionX, positionY) {
        this.ctx = canvasContext;
        this.x = positionX;
        this.y = positionY;
        this.width = 150;
        this.height = 150;
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
        this.speed = 1;
        this.direction = 'right'

    }
    headPosition() {
        if (this.direction === 'right') {
            // when the dino is turned right the head position is on the upper right corner
            return [this.x + this.width / 3 * 2.5, this.y + this.height / 3 * 0.7]

        } else {
            // when the dino is turned left, the head position is in the upper left corner
            return [this.x + this.width / 3 * 0.7, this.y + this.height / 3 * 0.7]
        }
    }

    // get the right picture depending on the direction property
    draw() {

        if (this.direction === 'right') {
            this.ctx.drawImage(dinoImgRight, this.x, this.y, this.width, this.height)
        } else {
            this.ctx.drawImage(dinoImgLeft, this.x, this.y, this.width, this.height)
        }
        // this.ctx.fillRect(this.headPosition()[0], this.headPosition()[1], 5, 5)

    }


    // DINO MOVING FUNCTION / change the direction property depending on where the car is compared the dino
    move(car) {
        if ((Math.abs(this.x - car.x) <= 50 || Math.abs(this.x - car.x) > -55)) {
            this.direction = 'left'
        }
        if (Math.floor(car.calculateCenter()[0] / this.speed) < Math.floor(this.headPosition()[0] / this.speed)) {
            // dino moves left
            this.x -= this.speed
            this.direction = 'left'

        } else if (Math.floor(car.calculateCenter()[0] / this.speed) > Math.floor(this.headPosition()[0] / this.speed)) {
            // dino moves right
            this.x += this.speed
            this.direction = 'right'
        }
        if (Math.floor(car.y / this.speed) < Math.floor(this.y / this.speed)) {
            // dino moves up
            this.y -= this.speed
            // this.direction = 'left'
        } else if (Math.floor(car.y / this.speed) > Math.floor(this.y / this.speed)) {
            // dino moves down
            this.y += this.speed
            // this.direction = 'right'
        }
    }

}