function generatePassword() {
	const length = document.getElementById("length").value;
	const includeUppercase = document.getElementById("uppercase").checked;
	const includeLowercase = document.getElementById("lowercase").checked;
	const includeNumbers = document.getElementById("numbers").checked;
	const includeSymbols = document.getElementById("symbols").checked;

	if (
		!includeUppercase &&
		!includeLowercase &&
		!includeNumbers &&
		!includeSymbols
	) {
		alert("Por favor, selecione pelo menos um tipo de caractere.");
		return;
	}

	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

	let allChars = "";
	if (includeUppercase) allChars += uppercaseChars;
	if (includeLowercase) allChars += lowercaseChars;
	if (includeNumbers) allChars += numberChars;
	if (includeSymbols) allChars += symbolChars;

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		password += allChars[randomIndex];
	}

	document.getElementById("password").value = password;
	addToHistory(password);
}

function addToHistory(password) {
	const history = document.getElementById("history");
	const newEntry = document.createElement("div");
	newEntry.textContent = password;
	history.appendChild(newEntry);
}

document.getElementById("teste").onclick = function () {
	generatePassword();
};
