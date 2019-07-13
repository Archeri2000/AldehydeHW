// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_js");

var createform = document.createElement('span'); // Create New Element Form
createform.setAttribute("class", "js_input");
x.appendChild(createform);

var nameWrapper = document.createElement('span');
nameWrapper.setAttribute("class", "inField");


var nameInput = document.createElement('input'); // Create Input Field for Name
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Username");
nameInput.setAttribute("name", "dname");
nameWrapper.appendChild(nameInput);

var nameSpan = document.createElement('span');
nameWrapper.appendChild(nameSpan);
createform.appendChild(nameWrapper);


var emailWrapper = document.createElement('span');
emailWrapper.setAttribute("class", "inField");

var emailInput = document.createElement('input'); // Create Input Field for Email
emailInput.setAttribute("type", "text");
emailInput.setAttribute("placeholder", "Email");
emailInput.setAttribute("name", "demail");
emailWrapper.appendChild(emailInput);

var emailSpan = document.createElement('span');
emailWrapper.appendChild(emailSpan);
createform.appendChild(emailWrapper);


var ageWrapper = document.createElement('span');
ageWrapper.setAttribute("class", "inField");

var ageInput = document.createElement('input'); // Create Input Field for Age
ageInput.setAttribute("type", "text");
ageInput.setAttribute("placeholder", "Age");
ageInput.setAttribute("name", "dage");
ageWrapper.appendChild(ageInput);

var ageSpan = document.createElement('span');
ageWrapper.appendChild(ageSpan);
createform.appendChild(ageWrapper);


document.getElementById('checker').addEventListener('click', function (event) {
	var username = document.getElementsByName("dname")[0].value;
	var email = document.getElementsByName("demail")[0].value;
	var age = document.getElementsByName("dage")[0].value;
	console.log("Username: " + username);
	console.log("Email: " + email);
	console.log("Age: " + age);
	var alphanum = /^[a-z0-9]+$/i;
	var echeck = /^[a-z0-9]+@[a-z0-9]+$/i;
	var agecheck = /^[0-9]+$/
	if(!alphanum.test(username)) console.log("invalid username");
	if(!echeck.test(email)) console.log("invalid email");
	if(!agecheck.test(age) || age < 0 || age > 150) console.log("invalid age");
});