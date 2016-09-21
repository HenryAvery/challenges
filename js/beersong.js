var output = '';

function playsong() {

  for (beer = 99; beer >= 0; beer--) {
    if (beer > 1) {
      output += "<p>" + beer + " bottles of beer on the wall. " + beer + " bottles of beer.Take 1 down pass it around. " + (beer - 1) + " bottles of beer on the wall. </p>";
    }
    if (beer == 1) {
      output += "<p>" + beer + " bottles of beer on the wall. " + beer + " bottles of beer.Take 1 down pass it around. No more bottles of beer on the wall. </p>";
      }
    if (beer == 0) {
      output += "<p>No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.</p>"
    }
    document.getElementById('output').innerHTML = output;
  }
}




document.getElementById('play').addEventListener('click', playsong)
