document.addEventListener("DOMContentLoaded", function () {
	const togglePassword = document.querySelector(".toggle-password");
	const passwordField = document.getElementById("password");

	togglePassword.addEventListener("click", function () {
		// Kiểm tra kiểu hiện tại của trường mật khẩu và thay đổi nó
		const type =
			passwordField.getAttribute("type") === "password" ? "text" : "password";
		passwordField.setAttribute("type", type);

		// Thay đổi icon
		this.classList.toggle("bi-eye");
		this.classList.toggle("bi-eye-slash");
	});
});
