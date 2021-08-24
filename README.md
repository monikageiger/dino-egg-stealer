## Dino Egg Stealer

## Play me

[Here](https://monikageiger.github.io/dino-egg-stealer/)

## Description
Dino game is a survival game, where you have to get away from the T-Rex, without colliding with it, and in the meantime try to collect it's eggs to be able to win. You win if you reach 10 eggs. Be careful! You only have one life. 


## MVP (DOM - CANVAS)

- game has a car that can be moved with the arrow keys
- game has a T-Rex that is constantly following the car
- there are eggs spawning until a given number is reached

## index.js

- window.onload(){}

## game.js

- Game(){}
- drawScore(){}
- startGameFromStartPage(){}
- startGameFromLosePage(){}
- startGameFromWinPage(){}
- checkCollisionEgg(){}
- checkCollisionsDino(){}
- checkWin(){}
- playerLost(){}
- play(){}

## background.js

- Background(canvasContext){}
- draw(){}

## car.js 

- Car(canvasContext, positionX, positionY){}
- calculateCenter(){}
- moveCar(event){}
- stopCar(e){}
- draw(){}
- newPos(){}

## dino.js

- Dino(canvasContext, positionX, positionY){}
- headPosition(){}
- draw(){}
- move(car){}

## egg.js

- Egg(canvasContext, posX, posY){}
- draw(){}

## sound.js

- sound(src){}


## Task


- index - create Game class
- game - addEventListener
- game - build canvas
- game - create variables
- game - check collisions
- game - check winner and loser conditions
- game - start game loop
- background - build background
- background - draw
- car - build car
- car - calculate center of car
- car - move car according to direction
- car - stop car
- car - draw
- car - position
- dino - build dino
- dino - create dino head position
- dino - draw
- dino - move
- egg - build egg
- egg - draw
- sound - build sounds


## Links

# Trello 

[My Trello](https://trello.com/b/JBgFlhTI/project-1)
