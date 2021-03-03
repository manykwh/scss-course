function ageVerification(age) {
	return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30);
ageVerification(10);

function adminControls(user) {
	return user ? user.admin ? "showing admin controls" : "You need to be an admin" : "you need to be logged in";
}

const userOne = {
	name: "Cindi",
	admin: true
};

adminControls(userOne);
const userTwo = null;
adminControls(userTwo);

const userThree = {
	name: "",
	admin: false
};

adminControls(userThree);
