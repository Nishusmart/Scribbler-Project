// Modal Nodes
var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var composePmodal = document.getElementById("composePmodal");

// Hiding of modals 
signup.style.display = "none";
signin.style.display = "none";
composePmodal.style.display = "none";

const showsignup = () => {
	signup.style.display = "block";
};

const showsignin = () => {
	signin.style.display = "block";
};
const showcomposePmodal = () => {
	composePmodal.style.display = "block";
};
//opens the signup modal
const raiseSignUp = () => {
	signin.style.display = "none";
	showsignup();
};

const span = document.getElementsByClassName("close");
for (const close of span) {
	close.onclick = function () {
		signup.style.display = "none";
		signin.style.display = "none";
		composePmodal.style.display = "none";
	};
}
//closes when clicked outside 
window.onclick = function (event) {
	if (event.target == signup) {
		signup.style.display = "none";
	} else if (event.target == signin) {
		signin.style.display = "none";
	} else if (event.target == composePmodal) {
		composePmodal.style.display = "none";
	}
};
