Solitaire
================

A Sparta Global game project.

## How to run
1. Download the project folder
2. Open index.html

## Purpose
The purpose of this project was to create and build a browser based game using html, css, and Javascript.

This project also serves to consolodate two weeks of learning html, css and Javascript, and demonstrate a range of skills in a one week project.

The progression of the project was noted using git that allows to split the project objectives into stages, and github was used to protect and save a working project while branching off the main project to make any additional changes to the project.

## Synopsis
This game is based off a puzzle board game called Solitaire. On this board, there are 33 holes indented on the board which holds 32 balls.

The objectve of the game is to complete the board by having only one ball remaining left on the board. The process of removing the balls is to take a ball and hop over an adjacent ball directly on the selected balls' x-axis or y-axis into a free space where a ball is not occupying a hole. 

The player carries on this method of play until there are no further moves to make. Once the player has completed all the moves they can, the game tallies the score by counting how many balls are left on the board. The goal of the puzzle game is to have one ball remaining.

## Functionality

The functionality of the game is dependant on the choices the player makes when selecting their method, and in the positioning of the balls that can be calculated mathematically.

* The board is designed in mind of a 7x7 grid so each hole represents a number.
* The puzzle does not utilise all the numbers in the grid therefore some numbers are not included
* The important detail of the grid is the relationship between the numbers and their placement on the grid

``` sh
01 02 |03 04 05| 06 07
08 09 |10 11 12| 13 14
______          ______
15 16  17 18 19  20 21
22 23  24 25 26  27 28
29 30  31 32 33  34 35
______          ______
36 37 |38 39 40| 41 42
43 44 |45 46 47| 48 49 
```

* From this grid, it can be seen that the x-axis moves either way by 1 and y-axis moves either way by 7.

* Considering that the player can only choose a ball, that hops over another ball, into a free space, the numbers help calucalte the parameter of where the player clicked and its median value

* For example player choose 23 and hops over 24 into space 25, the game calulates this move by collecting the values of 23 and 25 (the selected ball and free space) and calulates the two numbers median which is 24 (the hopped ball).

* The recognises whether the player has amade an move on the x-axis by seeing the difference between the numbers. If it is on x-axis, the difference the game looks for is 2. If it is on y-axis, the difference the game looks for is 14.

* Finally there is a function that allows the game to count how many balls are left on the table to see how far the player reached.

## Built with

* HTML5
* CSS3
* JavaScript