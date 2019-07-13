// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_js");

var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var nameLabel = document.createElement('label'); // Create Label for Name Field
nameLabel.innerHTML = "Username : "; // Set Field Labels
createform.appendChild(nameLabel);

var nameInput = document.createElement('input'); // Create Input Field for Name
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "dname");
createform.appendChild(nameInput);

var nameLine = document.createElement('br');
createform.appendChild(nameLine);

var emailLabel = document.createElement('label'); // Create Label for Email Field
emailLabel.innerHTML = "Email : "; // Set Field Labels
createform.appendChild(emailLabel);

var emailInput = document.createElement('input'); // Create Input Field for Email
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "demail");
createform.appendChild(emailInput);

var emailLine = document.createElement('br');
createform.appendChild(emailLine);

var ageLabel = document.createElement('label'); // Create Label for Age Field
ageLabel.innerHTML = "Age : "; // Set Field Labels
createform.appendChild(ageLabel);

var ageInput = document.createElement('input'); // Create Input Field for Age
ageInput.setAttribute("type", "text");
ageInput.setAttribute("name", "dage");
createform.appendChild(ageInput);

var ageLine = document.createElement('br');
createform.appendChild(ageLine);

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