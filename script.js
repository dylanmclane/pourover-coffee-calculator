const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const coffeeStrength = document.getElementById('coffee-strength').value;
	const coffeeAmount = Number(document.getElementById('coffee-amount').value);
	const coffeeRatio = {
		weak: 1 / 19,
		medium: 1 / 17,
		strong: 1 / 15
	}[coffeeStrength];
	const waterAmount = coffeeAmount / coffeeRatio;
	
	result.textContent = `To make ${coffeeAmount} grams of coffee with a desired coffee strength of ${coffeeStrength}, use a coffee-to-water ratio of 1:${(1/coffeeRatio).toFixed(1)}. Use ${waterAmount.toFixed(1)} grams of water.`;
});