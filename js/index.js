window.onload = () => {

    // BUTTONS
    // const allBtns = document.getElementsByTagName('button')
    const welcomeBtn = document.getElementById('welcome-page-button')
    const winnerBtn = document.getElementById('winner-page-button')
    const loserBtn = document.getElementById('loser-page-button')
    // PAGE DISPLAYS
    const welcomePage = document.getElementById('welcome-page')
    const winnerPage = document.getElementById('win-page')
    const loserPage = document.getElementById('lose-page')
    const gamePage = document.getElementById('game-board')


    // EVENT LISTENERS
    document.addEventListener('keydown', moveCar);
    document.addEventListener('keyup', stopCar)
    welcomeBtn.addEventListener('click', startGameFromStartPage);
    loserBtn.addEventListener('click', startGameFromLosePage);
    winnerBtn.addEventListener('click', startGameFromWinPage);


    // CREATING CANVAS
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');


    // VARIABLES AND ARRAYS
    let frameId = null;
    const dinoSpeed = 3
    let eggsArray = [];
    const totalEggs = 3;
    const winScore = 1
    var menuSound = new sound('/sounds/jurassic.mp3')
    var gameSound = new sound('/sounds/during-game.mp3')
    menuSound.play()
    var roarSound = new sound('/sounds/roar.mp3')
    var winSound = new sound('/sounds/win.mp3')
    // let mySound;

    // CREATING OBJECTS
    const background = new Background(ctx);
    const car = new Car(ctx, canvas.width / 2 - 80, canvas.height / 2 - 50)
    const dino = new Dino(ctx, 0, 0);
    const score = {
        points: 0,
        draw: function () {
            ctx.font = '30px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText('Score: ' + this.points, 200, 50);
        }
    };


    // CREATING RANDOM EGGS
    setInterval(function () {
        if (eggsArray.length < totalEggs) {
            let egg = new Egg(
                ctx,
                Math.floor(Math.random() * (canvas.width - 80)),
                Math.floor(Math.random() * (canvas.height - 60))
            )
            eggsArray.push(egg)
        }
    }, 1000)


    // CHECK COLLISION BETWEEN CAR AND EGGS
    function checkCollisionsEgg(car, egg) {
        let collide =
            car.x < egg.centerX && //check the right side of the car
            car.x + car.width > egg.centerX &&
            car.y < egg.centerY &&
            car.y + car.height > egg.centerY;
        if (collide) {
            score.points += 1;
            let collidedEgg = eggsArray.indexOf(egg)
            eggsArray.splice(collidedEgg, 1)
        }
    }


    // COLLISION BETWEEN CAR AND DINO
    function checkCollisionsDino(car, dino) {
        let collide =
            Math.abs(dino.x - car.x) < 10 &&
            Math.abs(dino.y - car.y) < 10

        if (collide) {
            cancelAnimationFrame(frameId)
            playerLost()
        }
    }


    // WIN CONDITION CHECKER FUNCTION
    function checkWin() {
        if (score.points >= winScore) {
            gamePage.style.display = 'none'
            winnerPage.style.display = 'flex'
            cancelAnimationFrame(frameId)
            gameSound.stop()
            winSound.play()
        }
    }

    // LOSING FUNCTION
    function playerLost() {
        gamePage.style.display = 'none'
        loserPage.style.display = 'flex'
        menuSound.stop()
        gameSound.stop()
        roarSound.play()
    }


    // GAME STARTING FUNCTION
    function gameLoop() {

        frameId = requestAnimationFrame(gameLoop);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        car.newPos()
        background.draw();
        car.draw()
        score.draw()
        // dino.move()
        dinoMove()
        dino.draw()

        eggsArray.forEach((eachEgg) => {
            eachEgg.draw()
            checkCollisionsEgg(car, eachEgg)
        })
        checkCollisionsDino(car, dino)

        checkWin()



    }


    // BUTTON FUNCTIONS FOR PLAYING AGAIN
    function startGameFromStartPage() {
        welcomePage.classList.add('hide')
        welcomePage.classList.remove('container1')
        gamePage.style.display = 'flex'
        winSound.stop()
        gameSound.play()
        gameLoop();
    };

    function startGameFromLosePage() {
        window.location.reload();
        winSound.stop()
        // gamePage.style.display = 'flex'
        // loserPage.style.display = 'none'
        // gameLoop();
    };

    function startGameFromWinPage() {
        window.location.reload();
        winSound.stop()
        // gamePage.style.display = 'flex'
        // loserPage.style.display = 'none'
        // gameLoop();
    };


    // DINO MOVING FUNCTION
    function dinoMove() {
        // console.log(car.x, car.y, dino.x, dino.y)
        if (Math.floor(car.x / dinoSpeed) < Math.floor(dino.x / dinoSpeed)) {
            dino.x -= dinoSpeed
        } else if (Math.floor(car.x / dinoSpeed) > Math.floor(dino.x / dinoSpeed)) {
            dino.x += dinoSpeed
        }
        if (Math.floor(car.y / dinoSpeed) < Math.floor(dino.y / dinoSpeed)) {
            dino.y -= dinoSpeed
        } else if (Math.floor(car.y / dinoSpeed) > Math.floor(dino.y / dinoSpeed)) {
            dino.y += dinoSpeed
        }
    }

    // ARROWS MOVING CAR
    function moveCar(event) {
        console.log(event.keyCode)
        switch (event.keyCode) {

            case 37:
                // left arrow
                if (car.x > 0) {
                    car.speedX -= 1
                } else {
                    car.x = canvas.width
                };
                break;

            case 39:
                // right arrow
                if (car.x < canvas.width - car.width) {
                    car.speedX += 1
                } else {
                    car.x = 0 - car.width
                };
                break;
            case 38:
                // up arrow
                if (car.y > 0) {
                    car.speedY -= 1
                } else {
                    car.y = canvas.height
                };
                break;
            case 40:
                // down arrow
                if (car.y < canvas.height - car.height) {
                    car.speedY += 1
                } else {
                    car.y = 0 - car.height
                };
                break;

            default:
                break;
        }
    }


    // IF KEYUP MAKE CAR SPEED EQUAL TO 0
    function stopCar(e) {
        car.speedX = 0;
        car.speedY = 0;
    };
}