const dinoImg = document.createElement('img');
dinoImg.src = '/images/trex.png';

class Dino {
    constructor(canvasContext, positionX, positionY) {
        this.ctx = canvasContext;
        this.x = positionX;
        this.y = positionY;
        this.width = 150;
        this.height = 150;
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
        this.dinoSpeed = 1

    }
    draw() {
        this.ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }
    // DINO MOVING FUNCTION
    move(car) {
        // console.log(car.x, car.y, dino.x, dino.y)
        if (Math.floor(car.x / this.dinoSpeed) < Math.floor(this.x / this.dinoSpeed)) {
            this.x -= this.dinoSpeed
        } else if (Math.floor(car.x / this.dinoSpeed) > Math.floor(this.x / this.dinoSpeed)) {
            this.x += this.dinoSpeed
        }
        if (Math.floor(car.y / this.dinoSpeed) < Math.floor(this.y / this.dinoSpeed)) {
            this.y -= this.dinoSpeed
        } else if (Math.floor(car.y / this.dinoSpeed) > Math.floor(this.y / this.dinoSpeed)) {
            this.y += this.dinoSpeed
        }
    }

}