document.getElementById("login-button").addEventListener("click", login);

const credentials = new Map();
credentials.set("test@email.com", "hashed");
credentials.set("alpha@bet.com", "salt");
credentials.set("someone@gmail.com", "basic");
credentials.set("person@outlook.com", "insecure");
credentials.set("retro@hotmail.com", "123456");
credentials.set("tester@email.com", "secure");
credentials.set("security@email.com", "$wg&sK5@VSl*%dW8");
credentials.set("gdnc2327@iastate.edu", "cameo");

async function login() {
	const usernameBox = document.getElementById("email-input");
	const passwordBox = document.getElementById("password-input");
	const username = usernameBox.value;
	const password = passwordBox.value;
	
	let result = document.getElementById("login-result");
	
	// https://dev.to/saranshk/how-to-measure-javascript-execution-time-5h2
	const start_time = performance.now();
	if (credentials.has(username)) {
		// simulate hashing with sleep (https://stackoverflow.com/a/39914235)
		await new Promise(r => setTimeout(r, (Math.random() * 115) + 12));

		if (credentials.get(username) === password) {
			result.innerText = "Welcome back!";
			result.className = "success";
		} else {
			result.innerText = "Your username or password was not correct.";
			result.className = "failure";
			passwordBox.value = "";
		}
	} else {
		result.innerText = "Your username or password was not correct.";
		result.className = "failure";
		passwordBox.value = "";
	}
	const end_time = performance.now();
	document.getElementById("time-taken").innerText = `Time taken: ${end_time - start_time} ms`;
}
