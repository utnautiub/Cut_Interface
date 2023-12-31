const imgDiv = document.querySelector(".img-avt");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadbtn");

file.addEventListener("change", function () {
	const choosedFile = this.files[0];
	if (choosedFile) {
		const reader = new FileReader();

		reader.addEventListener("load", function () {
			img.setAttribute("src", reader.result);
		});

		reader.readAsDataURL(choosedFile);
	}
});
