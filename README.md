## Play me

[Here](https://monikageiger.github.io/dino-game/)

## Description
Dino game is a survival game, where you have to get away from the T-Rex, without colliding with it, and in the meantime try to collect it's eggs to be able to win. You win if you reach 10 eggs. Be careful! You only have one life. 


## MVP (DOM - CANVAS)

- game has a car that can be moved with the arrow keys
- game has a T-Rex that is constantly following the car
- there are eggs spawning until a given number is reached

## index.js

- window.onload(){}
- setInterval(){}
- checkWin(){}
- checkCollisionsEgg(car,egg){}
- checkCollisionsDino(car,dino){}
- playerLost(){}
- gameLoop(){}
- startGameFromStartPage(){}
- startGameFromLosePage(){}
- startGameFromWinPage(){}
- dinoMove(){}
- moveCar(event){}
- stopCar(){}


## background.js

- Background(canvasContext){}
- draw(){}

## car.js 

- Car(canvasContext, positionX, positionY){}
- draw(){}
- newPos(){}

## dino.js

- Dino(canvasContext, positionX, positionY){}
- draw(){}

## egg.js

- Egg(canvasContext, posX, posY){}
- draw(){}

## sound.js

- sound(src){}


## Task


- index - build DOM
- index - addEventListener
- index - build canvas
- index - create variables
- index - check collisions
- index - check winner and loser conditions
- index - start game loop
- background - build background
- background - draw
- car - build car
- car - draw
- car - position
- dino - build dino
- dino - draw
- egg - build egg
- egg - draw
- sound - build sounds


## Links

# Trello 

[My Trello](https://trello.com/b/JBgFlhTI/project-1)