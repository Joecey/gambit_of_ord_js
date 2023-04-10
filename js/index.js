`use strict`;
console.log("Hello world");

// add event listener for button roll
let player_roll = 0;
let computer_roll = 0;

document.querySelector("#player_dice").addEventListener("click", function () {
	// choose dice based on mod (0,1,2,0,1,2 etc etc)
	console.log(player_roll);
	const dice_num = player_roll % 3;
	switch (dice_num) {
		case 0:
			console.log("d8 rolled for player");
			break;
		case 1:
			console.log("d6 rolled for player");
			break;
		case 2:
			console.log("d4 rolled for player");
			break;
	}

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
			console.log("d8 rolled for computer");
			break;
		case 1:
			console.log("d6 rolled for computer");
			break;
		case 2:
			console.log("d4 rolled for computer");
			break;
	}

	// increment dice roll by 1
	computer_roll++;
});
