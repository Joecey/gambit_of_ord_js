// function will be used to store dice functions
// inputs > dice type
// outputs > roll

function diceRoll(dice_input) {
	console.log(`using dice function: ${dice_input}`);

	// get random number using dice roll
	const rand_num = Math.floor(Math.random() * dice_input) + 1;
	return rand_num;
}

// export functions here
export { diceRoll };
