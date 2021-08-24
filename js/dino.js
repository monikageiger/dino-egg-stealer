const dinoImg = document.createElement('img');
dinoImg.src = './images/trex.png';

class Dino {
    constructor(canvasContext, positionX, positionY, speed) {
        this.ctx = canvasContext;
        this.x = positionX;
        this.y = positionY;
        this.width = 150;
        this.height = 150;
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
        this.speed = speed;

    }
    headPosition() {

        return [this.x + this.width / 3 * 2.5, this.y + this.height / 3 * 0.7]
    }
    draw() {
        this.ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
        // this.ctx.fillRect(this.headPosition()[0], this.headPosition()[1], 5, 5)
    }
    // DINO MOVING FUNCTION
    move(car) {
        // console.log(car.x, car.y, dino.x, dino.y)
        if (Math.floor(car.calculateCenter()[0] / this.speed) < Math.floor(this.headPosition()[0] / this.speed)) {
            this.x -= this.speed
        } else if (Math.floor(car.calculateCenter()[0] / this.speed) > Math.floor(this.headPosition()[0] / this.speed)) {
            this.x += this.speed
        }
        if (Math.floor(car.y / this.speed) < Math.floor(this.y / this.speed)) {
            this.y -= this.speed
        } else if (Math.floor(car.y / this.speed) > Math.floor(this.y / this.speed)) {
            this.y += this.speed
        }
    }

}