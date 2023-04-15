`use strict`;

// import functions here
import { diceRoll } from "./dice.js";

// add event listener for button roll
let player_roll = 0;
let text_roll = "";

const player_dice = document.getElementById("playerdice");
const computer_dice = document.getElementById("compdice");

document.querySelector("#player_dice").addEventListener("click", function () {
	// choose dice based on mod (0,1,2,0,1,2 etc etc)
	// console.log(player_roll);
	const dice_num = player_roll % 3;

	switch (dice_num) {
		case 0:
			text_roll = "d8 rolled";
			console.log(diceRoll(8));

			break;
		case 1:
			text_roll = "d6 rolled";
			console.log(diceRoll(6));

			break;
		case 2:
			text_roll = "d4 rolled";
			console.log(diceRoll(4));

			break;
	}

	// display current dice rolled and change text
	// console.log(text_roll);
	player_dice.innerHTML = text_roll;
	computer_dice.innerHTML = text_roll;

	// increment dice roll by 1
	player_roll++;
});
