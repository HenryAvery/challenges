function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

document.getElementById("colorButton").addEventListener("click", function() {
	document.querySelector(".container").style.backgroundColor = randomColor();
	document.querySelector(".title").style.color = randomColor();
})