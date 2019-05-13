# Bowling Challenge

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Approach

0. Make the frame class capable of taking two rolls and give it a 'bonus' property dependent on the next frame (in the event of spare or strike)
1. Make a game class which can add the total of the frames without spares or strikes
1. Add spare logic (adds to bonus property of frame)
1. Add strike logic (same here)
1. Add the tenth round (pushes an extra frame into the initial array of frames if last frame === 10)
1. ~Do some jquery~

### How to use

It's not complete, but you can always clone it and run it from the console if you're set on doing so!
