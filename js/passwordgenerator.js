var numLetters;
var password;
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopurstuvwxyz1234567890";

document.getElementById("submit").addEventListener('click', function() {
  var numLetters = document.getElementById("numPassword").value;
  console.log(numLetters)
  password = "";
  for (var i = 0; i < numLetters; i++) {
    var random = Math.floor(Math.random() * possible.length);
    password += possible.charAt(random);
  }
  document.getElementById('output').innerHTML += "<h2>" + password + "</h2>";
});
document.getElementById("clear").addEventListener('click', function() {
  document.getElementById('output').innerHTML = "";
});
