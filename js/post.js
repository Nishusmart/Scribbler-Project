

var signup = document.getElementById("signup");
var signin = document.getElementById("signin");

signup.style.display = "none";
signin.style.display = "none";

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
	};
}

//closes when clicked outside 
window.onclick = function (event) {
	if (event.target == signup) {
		signup.style.display = "none";
	} else if (event.target == signin) {
		signin.style.display = "none";
	}
};

signup.style.display = "none";
ssignin.style.display = "none";

// heading_editing_post_
// post_body editing_post_body
var postHeaderDiv = document.getElementById("post_h");
var postContentDiv = document.getElementById("post_body");
var edit = false;
var editButton = document.getElementById("btn_edit_post");

const editDoc = () => {
	editing = !editing;
	if (editing) {
		postHeaderDiv.setAttribute("class", "editing_post_heading");
		postHeaderDiv.contentEditable = true;

		postContentDiv.contentEditable = true;
		postContentDiv.setAttribute("class", "editing_post_body");
		const saveIcon = document.createElement("i");
		saveIcon.setAttribute("class", "fas fa-save");
		editButton.innerText = "Save ";
		editButton.append(saveIcon);
	} else {
		const editIcon = document.createElement("i");
		editIcon.setAttribute("class", "fas fa-edit");
		editButton.innerText = "Edit ";
		editButton.append(editIcon);

		postHeaderDiv.removeAttribute("class");
		postHeaderDiv.contentEditable = false;

		postContentDiv.removeAttribute("class");
		postContentDiv.contentEditable = false;
	}
};
editButton.addEventListener("click", editDocument);

var likesCount = 0;
const describeLikes = () => {
	const likeTag = document.getElementById("like_count");
	likeTag.innerText =
		likesCount === 0
			? "Be the first one to like this!"
			: likesCount === 1
			? "1 person likes this!"
			: `${likesCount} people have liked this!`;
	likesCount += 1;
};
describeLikes();

const addComment = () => {
	const commentTextArea = document.getElementById("cmnt_composer");
	if (commentTextArea.value.trim().length === 0) {
		window.alert("Comment can't be empty");
	} else {
		const commentsList = document.getElementById("post_cmnt");
		const comment = document.createElement("li");
		comment.setAttribute("class", "cmnt");
		comment.innerText = commentTextArea.value;
		commentsList.prepend(comment);
	}
};
