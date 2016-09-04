var pass = "";
var user = "";
var userLogin;
var passLogin;

function clearField(field) {
 document.getElementById(field).value = "";
}

function assignField(field) {
 return	document.getElementById(field).value;
}


//** Create the account
document.getElementById('create').addEventListener("click", function() {
  user = assignField('createName');
  pass = assignField('createPassword');
  console.log(user);
  if (user === "" || password === "" ){
  	document.getElementById('status').innerHTML = '<h2>Enter a username and password.</h2>'
  }
  else {  
  document.getElementById('status').innerHTML = '<h2>Your account has been created.</h2>'
  }
  clearField('createName');
  clearField('createPassword');
});


//** Login to the account
document.getElementById('submit').addEventListener("click", function() {
  userLogin = assignField('username');
  passLogin = assignField('password');
  if (user === "" || password === "" ) {
  document.getElementById('status').innerHTML = '<h2>Please create a Username and Password </h2>'
  }
 else if(userLogin === user & passLogin === pass) {
    document.getElementById('wrapper').innerHTML = '<h2>You have logged in.</h2>'
  } else {
    document.getElementById('status').innerHTML = '<h2>Login Failed</h2>'
   clearField('password');
  }
});
