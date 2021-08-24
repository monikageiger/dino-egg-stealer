const carImgLeft = document.createElement('img');
const carImgRight = document.createElement('img');
carImgLeft.src = './images/car.png';
carImgRight.src = './images/car-right.png';

class Car {

    constructor(canvasContext, canvasWidth, canvasHeight) {
        this.ctx = canvasContext;
        this.x = canvasWidth / 2 - 80;
        this.y = canvasHeight / 2 - 50;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.width = 143;
        this.height = 68;
        this.speedX = 0;
        this.speedY = 0;
        document.addEventListener('keydown', this.moveCar.bind(this));
        document.addEventListener('keyup', this.stopCar.bind(this));
        this.direction = 'left'
    }
    calculateCenter() {
        return [this.x + this.width / 2, this.y + this.height / 2]
    }

    // ARROWS MOVING CAR
    moveCar(event) {
        switch (event.keyCode) {

            case 37:
                this.direction = 'left'
                // left arrow
                if (this.x > 0) {
                    this.speedX -= 1
                } else {
                    this.x = this.canvasWidth
                };
                break;

            case 39:
                // right arrow
                this.direction = 'right'
                if (this.x < this.canvasWidth - this.width) {
                    this.speedX += 1
                } else {
                    this.x = 0 - this.width
                };
                break;
            case 38:
                // up arrow
                if (this.y > 0) {
                    this.speedY -= 1
                } else {
                    this.y = this.canvasHeight
                };
                break;
            case 40:
                // down arrow
                if (this.y < this.canvasHeight - this.height) {
                    this.speedY += 1
                } else {
                    this.y = 0 - this.height
                };
                break;

            default:
                break;
        }
    }


    // IF KEYUP MAKE CAR SPEED EQUAL TO 0
    stopCar(e) {
        this.speedX = 0;
        this.speedY = 0;
    };


    draw() {
        if (this.direction === "left") {
            this.ctx.drawImage(carImgLeft, this.x, this.y, this.width, this.height)
        } else {
            this.ctx.drawImage(carImgRight, this.x, this.y, this.width, this.height)
        }
        // this.ctx.fillRect(this.calculateCenter()[0], this.calculateCenter()[1], 5, 5)
    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}