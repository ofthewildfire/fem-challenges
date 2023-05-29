const rollDice = document.querySelector(".dice-container");

async function getAdvice() {
	const response = await fetch(`https://api.adviceslip.com/advice`);
	const data = await response.json();

	addAdviceToHtml(data);
}

function addAdviceToHtml(data) {
	const adviceID = document.querySelector(".advice-id");
	const adviceText = document.querySelector(".advice-text");

	//

	adviceID.innerText = data.slip.id;
	adviceText.innerText = data.slip.advice;
}

rollDice.addEventListener("click", getAdvice);
