var alphaArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
var morseArr = '.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,-----,.----,..---,...--,....-,.....,-....,--...,---..,----.'.split(',');
var input;
var output = "";

document.getElementById('submit').addEventListener('click', function() {
  input = document.getElementById('input').value.split(' ');



  for (var i = 0; i < input.length; i++) {
    for (var o = 0; o < morseArr.length; o++) {
      
      if ( input[i] == "/"){
      output += " ";
      }
      
      else if (input[i] == morseArr[o]) {
        output += alphaArr[o];        
      }
    }


  }
  document.getElementById('output').innerHTML = "<h2>" + output + "</h2>";
  output = "";
});
