const eggImg = document.createElement('img')
eggImg.src = './images/egg.png'

class Egg {
    constructor(canvasContext, posX, posY) {
        this.ctx = canvasContext;
        this.image = eggImg;
        this.x = posX;
        this.y = posY;
        this.width = 45;
        this.height = 60;
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2
    }
    draw() {
        this.ctx.drawImage(eggImg, this.x, this.y, this.width, this.height)
    }
}