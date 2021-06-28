

var delPModal = document.getElementById("delPModal");
var signup= document.getElementById("signup");
var signin = document.getElementById("signin");

const showsignup = () => {
	signup.style.display = "block";
};

const showsignin = () => {
	signin.style.display = "block";
};
const raiseSignUp = () => {
	signin.style.display = "none";
	showsignup();
};
const span = document.getElementsByClassName("close");
for (const close of span) {
	close.onclick = function () {
		signup.style.display = "none";
		signin.style.display = "none";
		delPModal.style.display = "none";
	};
}

const showDelPModal = () => {
	delPModal.style.display = "block";
};
const hideDelPModal = () => {
	delPModal.style.display = "none";
};

//closes when clicked outside 
window.onclick = function (event) {
	if (event.target == delPModal) delPModal.style.display = "none";
	else if (event.target == signup) {
		signup.style.display = "none";
	} else if (event.target == signin) {
		signin.style.display = "none";
	}
};

signup.style.display = "none";
signin.style.display = "none";
delPModal.style.display = "none";
