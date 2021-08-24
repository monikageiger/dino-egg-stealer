const bgImg = document.createElement('img')
bgImg.src = '/images/grass.jpeg'

class Background {
    constructor(canvasContext) {
        (this.ctx = canvasContext);
        (this.x = 0);
        (this.y = 0);
        (this.width = 1500);
        (this.height = 700);
    }
    draw() {
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height)
    }
}