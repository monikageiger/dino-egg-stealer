window.onload = () => {








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

}