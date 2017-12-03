//Random Color Generator
let i = 0;
let repeat = 50;
let button = document.getElementById('submit');

function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

document.getElementById('test').addEventListener('click', setColor);

function setColor() {

    i++
    document.querySelector(".container").style.backgroundColor = randomColor();
    document.querySelector("h1").style.color = randomColor();
    if (i < repeat) {
      setTimeout( setColor, 70);
    }
    else {
    i=0;
    document.querySelector(".container").style.backgroundColor = "#f1f1f1";
    document.querySelector("h1").style.color = 'black';

    }
  }

//Gets the time 
var timeinterval = '';


function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}
//Sets and runs clock
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = '<h1>' + t.minutes + ':' + ("00" + t.seconds).substr(-2) + '</h1>';
    if(t.total<=0){
      clearInterval(timeinterval);
      setColor();
      button.innerHTML = "Start";
    }
  },1000);
}

//on click runs
button.addEventListener('click', function click() {
clearInterval(timeinterval);
button.innerHTML = "Stop";


var deadline = new Date();
var radios = document.getElementsByName('break');
for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        var diff = radios[i].value;
        break;
    }
}

var endtime = new Date(deadline.getTime() + diff*60000);
button.removeEventListener('click', click, false);
button.id = 'stop';

document.getElementById('stop').addEventListener('click', function stopclick() {
clearInterval(timeinterval);
document.getElementById('clockdiv').innerHTML = ''
document.getElementById('stop').innerHTML = "Start";
document.getElementById('stop').removeEventListener('click', stopclick, false);
document.getElementById('stop').id = 'submit';
button.addEventListener('click', click);
});

initializeClock('clockdiv', endtime);

});