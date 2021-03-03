var userObj = {
	email: 'sample@example.com',
	fullName: 'Lristine Hudgens'
}

function dashboardGreeting() {
	var userObj = {
		email: 'sample2@example.com',
		fullName: 'Jordan Hudgens'
	}
	console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);
