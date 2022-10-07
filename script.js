'use strict';
//Selecting elements
const score0El	=	document.querySelector('#score--0');
const score1El	=	document.getElementById ('score--1');
const current0El	=	document.getElementById('current--0');
const current1El	=	document.getElementById('current--1')
const diceEl	=	document.querySelector('.dice');
const btnNew	=	document.querySelector('.btn--new');
const btnRoll	=	document.querySelector('.btn--roll');
const btnHold	=	document.querySelector('.btn--hold');


//Starting conditional
score0El.textContent	=	0;
score1El.textContent	=	0;
diceEl.classList.add('hidden');

const scors	=	[0	,	0];
let currentScore	=	0;
let activePlayer	=	0;

//Rolling dice functionality
btnRoll.addEventListener('click'	, function(){
	//1. Generating a random dice roll
	const dice = Math.trunc(Math.random() *	6)	+	1;
	//2.Display a dice

	diceEl.classList.remove('hidden');
	diceEl.src	=	`dice-${dice}.png`
	if(dice	!=	1){
		currentScore	+=		dice;
		document.getElementById(`current--${activePlayer}`).textContent	=	currentScore;
		current0El.textContent	=	currentScore;
		//3.checked for rolled 1: if true switch to next player
	}else{

	}
})





