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
