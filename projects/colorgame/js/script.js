var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	setupModeButtons();
	setupSquares();
  reset();
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to sqaures
		squares[i].addEventListener('click', function() {
			//grab color of clicked sqaure
			var clickedColor	= this.style.backgroundColor; 
			//compare color to picked color
			if(clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct!";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});		
  }
}


function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from arr
	pickedColor = pickColor();
	//cahnge color display to new picked color
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener('click', function(){
reset();
});


function changeColors(color) {
	//loop through squares
	for (var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
		// make and array 
			var arr = [];
		//add num randomw colors
			for (var i = 0; i < num; i++){
				arr.push(randomColor());
			}
		//return array
		return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
