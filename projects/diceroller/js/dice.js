var buttons = document.getElementsByClassName('dice');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', postResult);
}



function rollDie(sides) {
  if (!sides) sides = 6;
var sum = 1 + Math.floor(Math.random() * sides);
return sum;
}

function postResult() {
  var s = this.attributes["id"].value;
  var d = this.previousElementSibling.value;
  var together = '';
  var sum = 0;
  
  for (i = 0; i < d; i++) {
   var single = rollDie(s);
   sum += single; 
   console.log(sum);
   together += single;
   if (i < d-1) {
   together += " + ";
   }
  }
  
  document.getElementById("output").innerHTML =
  "<h2> You rolled " + d + " D" + s + " : " + together + " = " + sum + " </h2>";
}
