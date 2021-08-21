const dinoImg = document.createElement('img');
dinoImg.src = '/images/trex.png';

class Dino {
    constructor(canvasContext, positionX, positionY) {
        this.ctx = canvasContext;
        this.x = positionX;
        this.y = positionY;
        this.width = 150;
        this.height = 150;

    }
    draw() {
        this.ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }

}