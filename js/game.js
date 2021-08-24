class Game {
    constructor() {
        // BUTTONS
        // const allBtns = document.getElementsByTagName('button')
        this.welcomeBtn = document.getElementById('welcome-page-button');
        this.winnerBtn = document.getElementById('winner-page-button');
        this.loserBtn = document.getElementById('loser-page-button');
        // PAGE DISPLAYS
        this.welcomePage = document.getElementById('welcome-page');
        this.winnerPage = document.getElementById('win-page');
        this.loserPage = document.getElementById('lose-page');
        this.gamePage = document.getElementById('game-board');
        // EVENT LISTENERS

        this.welcomeBtn.addEventListener('click', this.startGameFromStartPage.bind(this));
        this.loserBtn.addEventListener('click', this.startGameFromLosePage.bind(this));
        this.winnerBtn.addEventListener('click', this.startGameFromWinPage.bind(this));
        // CREATING CANVAS
        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');


        // VARIABLES AND ARRAYS
        this.frameId = null;
        this.dinoSpeed = 1;
        this.eggsArray = [];
        this.totalEggs = 3;
        this.winScore = 5;
        this.menuSound = new sound('/sounds/jurassic.mp3');
        this.gameSound = new sound('/sounds/during-game.mp3');
        this.menuSound.play();
        this.roarSound = new sound('/sounds/roar.mp3');
        this.winSound = new sound('/sounds/win.mp3');
        // let mySound;

        // CREATING OBJECTS
        this.background = new Background(this.ctx);
        this.car = new Car(this.ctx, this.canvas.width, this.canvas.height);
        this.dino = new Dino(this.ctx, 0, 0, this.dinoSpeed);
        this.score = 0

    }

    drawScore() {
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Stolen eggs: ' + this.score, 1250, 50);
    }
    // BUTTON FUNCTIONS FOR PLAYING AGAIN
    startGameFromStartPage() {
        this.welcomePage.classList.add('hide')
        this.welcomePage.classList.remove('container1')
        this.gamePage.style.display = 'flex'
        this.winSound.stop()
        this.gameSound.play()
        // CREATING RANDOM EGGS
        setInterval(() => {
            if (this.eggsArray.length < this.totalEggs) {
                let egg = new Egg(
                    this.ctx,
                    Math.floor(Math.random() * (this.canvas.width - 80)),
                    Math.floor(Math.random() * (this.canvas.height - 60))
                )
                this.eggsArray.push(egg);
                // egg.draw();
            }
        }, 1000)
        this.play();
    };

    startGameFromLosePage() {
        window.location.reload();
        this.winSound.stop()
        // gamePage.style.display = 'flex'
        // loserPage.style.display = 'none'
        // gameLoop();
    };

    startGameFromWinPage() {
        window.location.reload();
        this.winSound.stop()
        // gamePage.style.display = 'flex'
        // loserPage.style.display = 'none'
        // gameLoop();
    };



    // CHECK COLLISION BETWEEN CAR AND EGGS
    checkCollisionEgg() {
        const car = this.car;
        this.eggsArray.forEach((egg) => {
            // console.log(egg)
            let collide =
                car.x < egg.centerX && //check the right side of the car
                car.x + car.width > egg.centerX &&
                car.y < egg.centerY &&
                car.y + car.height > egg.centerY;
            if (collide) {
                this.score += 1;
                let collidedEgg = this.eggsArray.indexOf(egg);
                this.eggsArray.splice(collidedEgg, 1);
            }
        });
    }

    // COLLISION BETWEEN CAR AND DINO
    checkCollisionsDino() {
        console.log(this.dino.headPosition()[0], this.car.calculateCenter()[0])
        console.log(this.dino.headPosition()[1], this.car.calculateCenter()[1])
        let collide =
            Math.abs(this.dino.headPosition()[0] - this.car.calculateCenter()[0]) < 10 &&
            Math.abs(this.dino.headPosition()[1] - this.car.calculateCenter()[1]) < 10

        if (collide) {
            console.log(collide)
            cancelAnimationFrame(this.frameId)
            this.playerLost()
        }
    }


    // WIN CONDITION CHECKER FUNCTION
    checkWin() {
        if (this.score >= this.winScore) {
            this.gamePage.style.display = 'none'
            this.winnerPage.style.display = 'flex'
            cancelAnimationFrame(this.frameId)
            this.gameSound.stop()
            this.winSound.play()
        }
    }

    // LOSING FUNCTION
    playerLost() {
        this.gamePage.style.display = 'none'
        this.loserPage.style.display = 'flex'
        this.menuSound.stop()
        this.gameSound.stop()
        this.roarSound.play()
    }


    // GAME STARTING FUNCTION
    play() {

        this.frameId = requestAnimationFrame(this.play.bind(this));
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.car.newPos()
        this.background.draw();
        this.car.draw()
        this.drawScore()
        this.dino.move(this.car)

        this.dino.draw()
        this.eggsArray.forEach(egg => egg.draw())

        this.checkCollisionsDino()
        this.checkCollisionEgg()

        this.checkWin()


    }
}