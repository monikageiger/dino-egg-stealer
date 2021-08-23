const carImg = document.createElement('img');
carImg.src = '/images/car.png';

class Car {

    constructor(canvasContext, positionX, positionY) {
        this.ctx = canvasContext,
            this.image = carImg,
            this.x = positionX,
            this.y = positionY,
            this.width = 143,
            this.height = 68,
            this.speedX = 0,
            this.speedY = 0,
            this.centerX = this.x + this.width / 2,
            this.centerY = this.y + this.height / 2
    }

    draw() {
        this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}