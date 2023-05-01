`use strict`;

// import functions here
import { diceRoll } from "./dice.js";

// add event listener for button roll

let game_state = false;
let player_roll = 0;
let player_number = 0;
let computer_number = 0;
let player_total = 0;
let comp_total = 0;

const player_dice = document.getElementById("playerdice");
const computer_dice = document.getElementById("compdice");
const state_text = document.getElementById("game_state");
const player_total_text = document.getElementById("player_total");
const comp_total_text = document.getElementById("comp_total");
const html_result = document.getElementById("result");

document.querySelector("#button_state").addEventListener("click", function () {
	// switch booleon
	game_state = !game_state;
	state_text.innerHTML = game_state;
});

document.querySelector("#player_dice").addEventListener("click", function () {
	// choose dice based on mod (0,1,2,0,1,2 etc etc)
	// console.log(player_roll);
	if (game_state === true) {
		const dice_num = player_roll % 3;

		switch (dice_num) {
			case 0:
				// reset total here
				player_total = 0;
				comp_total = 0;

				console.log("d8 rolled");
				// roll for playerr
				player_number = diceRoll(8);
				// roll for computer
				computer_number = diceRoll(8);

				break;
			case 1:
				console.log("d6 rolled");
				// roll for playerr
				player_number = diceRoll(6);
				// roll for computer
				computer_number = diceRoll(6);

				break;
			case 2:
				console.log("d4 rolled");
				// roll for playerr
				player_number = diceRoll(4);
				// roll for computer
				computer_number = diceRoll(4);
				// change game state back to false
				game_state = !game_state;

				break;
		}

		// display current dice rolled and change text
		// console.log(text_roll);
		player_dice.innerHTML = player_number;
		computer_dice.innerHTML = computer_number;

		// update total
		player_total = player_total + player_number;
		comp_total = comp_total + computer_number;
		player_total_text.innerHTML = player_total;
		comp_total_text.innerHTML = comp_total;

		// increment dice roll by 1
		player_roll++;

		// update game state on screen
		state_text.innerHTML = game_state;

		// check final score here
		if (dice_num === 2) {
			if (player_total > comp_total) {
				html_result.innerHTML = "Player wins";
			} else if (player_total < comp_total) {
				html_result.innerHTML = "Computer wins";
			} else {
				html_result.innerHTML = "Draw!";
			}
		}
	}
});
