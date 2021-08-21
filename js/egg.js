const eggImg = document.createElement('img')
eggImg.src = '/images/egg.png'

class Egg {
    constructor(canvasContext, posX, posY, width, height) {
        this.ctx = canvasContext;
        this.image = eggImg;
        this.x = posX;
        this.y = posY;
        this.width = 100;
        this.height = 60
    }
    draw() {
        this.ctx.drawImage(eggImg, this.x, this.y, this.width, this.height)
    }
}