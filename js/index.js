window.onload = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let frameId = null;



    const background = new Background(ctx);
    const car = new Car(ctx, canvas.width / 2 - 80, canvas.height / 2 - 50)
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

    function checkCollisions(car, egg) {
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




    function gameLoop() {
        frameId = requestAnimationFrame(gameLoop);

        ctx.clearRect(0, 0, canvas.width, canvas.height);



        background.draw();
        car.draw()
        score.draw()

        eggsArray.forEach((eachEgg) => {
            eachEgg.draw()
            checkCollisions(car, eachEgg)
        })


    }
    gameLoop()

    window.addEventListener('keydown', moveCar);

    function moveCar(event) {
        console.log(event.keyCode)
        switch (event.keyCode) {

            case 37:
                if (car.x > 0) car.x -= 1;
                break;

            case 39:
                if (car.x < canvas.width - car.width) car.x += 1;
                break;
            case 38:
                if (car.y > 0) car.y -= 1;
                break;
            case 40:
                if (car.y < canvas.height - car.height) car.y += 1;
                break;

            default:
                break;
        }
    }
}