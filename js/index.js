`use strict`;
console.log("Hello world");

// add event listener for button roll
let player_roll = 0;
let computer_roll = 0;

const player_dice = document.getElementById("playerdice");
const computer_dice = document.getElementById("compdice");
let player_text = "";
let computer_text = "";

document.querySelector("#player_dice").addEventListener("click", function () {
	// choose dice based on mod (0,1,2,0,1,2 etc etc)
	console.log(player_roll);
	const dice_num = player_roll % 3;

	switch (dice_num) {
		case 0:
			player_text = "d8 rolled for player";

			break;
		case 1:
			player_text = "d6 rolled for player";

			break;
		case 2:
			player_text = "d4 rolled for player";

			break;
	}

	// display current dice rolled and change text
	console.log(player_text);
	player_dice.innerHTML = player_text;

	// increment dice roll by 1
	player_roll++;
});

// TODO 10/4/23: you can probably combine these two functions as one, but that's a later issue
document.querySelector("#computer_dice").addEventListener("click", function () {
	// choose dice based on mod (0,1,2,0,1,2 etc etc)
	console.log(computer_roll);
	const dice_num = computer_roll % 3;
	switch (dice_num) {
		case 0:
			computer_text = "d8 rolled for computer";
			break;
		case 1:
			computer_text = "d6 rolled for computer";
			break;
		case 2:
			computer_text = "d4 rolled for computer";
			break;
	}

	console.log(computer_text);
	computer_dice.innerHTML = computer_text;

	// increment dice roll by 1
	computer_roll++;
});
