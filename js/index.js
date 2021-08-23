// BUTTONS
// const allBtns = document.getElementsByTagName('button')
const welcomeBtn = document.getElementById('welcome-page-button')
const winnerBtn = document.getElementById('winner-page-button')
const loserBtn = document.getElementById('loser-page-button')
// PAGE DISPLAYS
const welcomePage = document.getElementById('welcome-page')
const winnerPage = document.getElementById('win-page')
const loserPage = document.getElementById('win-page')
const gamePage = document.getElementById('game-board')





// welcomeBtn.addEventListener("click", startGame)

window.onload = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let frameId = null;
    const dinoSpeed = 3


    const background = new Background(ctx);
    const car = new Car(ctx, canvas.width / 2 - 80, canvas.height / 2 - 50)
    let dino = new Dino(ctx, 0, 0);
    let eggsArray = [];
    const totalEggs = 3;
    const score = {
        points: 0,
        draw: function () {
            ctx.font = '30px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText('Score: ' + this.points, 200, 50);
        }
    };

    let eggId = null
    eggId = setInterval(function () {
        if (eggsArray.length < totalEggs) {
            let egg = new Egg(
                ctx,
                Math.floor(Math.random() * (canvas.width - 80)),
                Math.floor(Math.random() * (canvas.height - 60))
            )
            eggsArray.push(egg)
        }
    }, 1000)

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

    function checkCollisionsDino(car, dino) {

        let collide =
            Math.abs(dino.x - car.x) < 10 &&
            Math.abs(dino.y - car.y) < 10

        if (collide) {
            cancelAnimationFrame(frameId)
            alert('crash')
        }
    }


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



    }
    // gameLoop()
    welcomeBtn.onclick = () => {
        welcomePage.classList.add('hide')
        welcomePage.classList.remove('container1')
        gamePage.style.display = 'flex'
        gameLoop();
    };

    window.addEventListener('keydown', moveCar);

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
    document.addEventListener('keyup', (e) => {

        car.speedX = 0;
        car.speedY = 0;

    });
}