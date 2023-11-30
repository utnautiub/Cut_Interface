const optionMenus = document.querySelectorAll(".select-menu"),
	selectBtns = document.querySelectorAll(".select-btn"),
	options = document.querySelectorAll(".option");

selectBtns.forEach((selectBtn, index) => {
	selectBtn.addEventListener("click", (event) => {
		// Toggle the active class on the select-menu
		optionMenus[index].classList.toggle("active");

		// Stop the click event from reaching the document
		event.stopPropagation();
	});
});

options.forEach((option) => {
	option.addEventListener("click", () => {
		let selectedOption = option.querySelector(".option-text").innerText;
		let sBtn_text = option.closest(".select-menu").querySelector(".sBtn-text");
		sBtn_text.innerText = selectedOption;

		option.closest(".select-menu").classList.remove("active");
	});
});

// Add an event listener to the document
document.addEventListener("click", (event) => {
	optionMenus.forEach((menu) => {
		// Check if the click is outside the menu
		if (!menu.contains(event.target)) {
			menu.classList.remove("active");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Select all toggle icons
	const togglePasswords = document.querySelectorAll(".toggle-password");

	togglePasswords.forEach((toggle) => {
		toggle.addEventListener("click", function () {
			// Find the nearest password field relative to the clicked toggle icon
			const passwordField = toggle.previousElementSibling;

			// Check the current type of the password field and change it
			const type =
				passwordField.getAttribute("type") === "password" ? "text" : "password";
			passwordField.setAttribute("type", type);

			// Change the icon
			this.classList.toggle("bi-eye");
			this.classList.toggle("bi-eye-slash");
		});
	});
});

// const optionMenus = document.querySelectorAll(".select-menu"),
// 	selectBtns = document.querySelectorAll(".select-btn"),
// 	options = document.querySelectorAll(".option");

// selectBtns.forEach((selectBtn, index) => {
// 	selectBtn.addEventListener("click", () => {
// 		optionMenus[index].classList.toggle("active");
// 	});
// });

// options.forEach((option) => {
// 	option.addEventListener("click", () => {
// 		let selectedOption = option.querySelector(".option-text").innerText;
// 		let sBtn_text = option.closest(".select-menu").querySelector(".sBtn-text");
// 		sBtn_text.innerText = selectedOption;

// 		option.closest(".select-menu").classList.remove("active");
// 	});
// });
