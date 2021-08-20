window.onload = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let frameId = null;

    const background = new Background(ctx);
    const car = new Car(ctx, 0, 0)

    function gameLoop() {
        frameId = requestAnimationFrame(gameLoop);

        ctx.clearRect(0, 0, canvas.width, canvas.height);



        background.draw();
        car.draw()


    }
    gameLoop()

    window.addEventListener('keydown', moveCar);

    function moveCar(event) {
        console.log(event.keyCode)
        switch (event.keyCode) {

            case 37:
                if (car.x > 0) car.x -= 15;
                break;

            case 39:
                if (car.x < canvas.width - car.width) car.x += 15;
                break;
            case 38:
                if (car.y > 0) car.y -= 15;
                break;
            case 40:
                if (car.y < canvas.height - car.height) car.y += 15;
                break;

            default:
                break;
        }
    }
}