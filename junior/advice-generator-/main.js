import "./style.css";

async function getAdvice() {
	const res = await fetch("https://api.adviceslip.com/advice");
	const data = await res.json();
	placeAdviceToHTML(data);
}

document.querySelector("button").addEventListener("click", getAdvice);

function placeAdviceToHTML(advice) {
	document.querySelector("span").innerText = advice.slip.id;
	document.querySelector("h1").innerText = advice.slip.advice;
}
