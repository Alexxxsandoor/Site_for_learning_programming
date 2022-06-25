var user = [
	{
		id: 0,
		firstName: "Савицький",
		lastName: "Максим",
		dateOfBirth: "31/01/2001",
		phone: "+380939483597",
		login: "MangoMango",
		password: "1",
		dateRegistration: "31/05/2022",
		email: "dpta2gml@gmail.com",
	},
]

var userId

const userOutput = (user, id) => {
	const idLastName = document.querySelector("#lastname");
	idLastName.innerHTML = user[id].lastName;

	const idFirstName = document.querySelector("#firstname");
	idFirstName.innerHTML = user[id].firstName;

	const userLogin = document.querySelector(".login");
	userLogin.append(user[id].login)

	const userPhone = document.querySelector(".phone");
	userPhone.append(user[id].phone)

	const userEmail = document.querySelector(".email");
	userEmail.append(user[id].email)

	const userCourse = document.querySelector(".course");

	if (typeof user[id].startCourse == "number") userCourse.append(user[id].startCourse + " класс")
	else userCourse.append(user[id].startCourse)

}





var bellI = 0;

function bell() {

	const bell = document.querySelector(".bell-info")

	if (bellI == 0) {
		bell.style.display = "flex"
		bellI++
	} else {
		bell.style.display = "none"
		bellI--
	}
}


var userI = 0;
function userinfo() {

	const user = document.querySelector(".user-info")

	if (userI == 0) {
		user.style.display = "flex"
		userI++
	} else {
		user.style.display = "none"
		userI--
	}
}

var ex = 1

function exit() {

	if (ex == 0) {
		const headerUser = document.querySelector(".header__user-name")
		headerUser.style.display = "none"

		const exitDiv = document.querySelector(".exit")
		exitDiv.innerHTML = ""

		const rightContainerDiv = document.querySelector(".container__right-container")
		if (rightContainerDiv) rightContainerDiv.remove()


		login()

		ex++
	} else {

		const headerUser = document.querySelector(".header__user-name")
		headerUser.style.display = "flex"


		const exitDiv = document.querySelector(".exit")
		exitDiv.innerHTML = "Вийти"


		const rightContainerDiv = document.querySelector(".container__right-container")
		if (rightContainerDiv) rightContainerDiv.remove()
		else courseOutput(course)



		ex--
	}



}

function login() {

	const containerDiv = document.querySelector(".container")

	const loginDiv = document.querySelector(".login-div")
	if (loginDiv) loginDiv.remove()
	else {
		const headerUser = document.createElement("div")
		headerUser.className = "login-div"

		headerUser.innerHTML = "<h2>Увійти до системи</h2>"

		const line = document.createElement("hr")
		headerUser.append(line)

		const inputLogin = document.createElement("input")
		inputLogin.setAttribute("placeholder", "Логін")
		inputLogin.className = "inputLogin"

		const inputPassword = document.createElement("input")
		inputPassword.setAttribute("placeholder", "Пароль")
		inputPassword.setAttribute("type", "password")
		inputPassword.className = "inputPassword"

		headerUser.append(inputLogin)
		headerUser.append(inputPassword)

		const buttonDiv = document.createElement("div")
		buttonDiv.className = "button-log-reg"

		const buttonLogin = document.createElement("button")
		buttonLogin.innerHTML = "Увійти"
		buttonLogin.setAttribute("onclick", "comeIn(user)")




		buttonDiv.append(buttonLogin)



		headerUser.append(buttonDiv)



		containerDiv.append(headerUser)
	}


}






function closeLoginDiv() {

	const loginDiv = document.querySelector(".login-div")

	if (loginDiv) loginDiv.remove()

}


function comeIn(user) {

	const login = document.querySelector(".inputLogin").value

	const password = document.querySelector(".inputPassword").value


	for (let i = 0; i < user.length; i++) {

		if (user[i].login == login && user[i].password == password) {

			const exitDiv = document.querySelector(".exit")
			exitDiv.innerHTML = "Вийти"

			userId = i;
			courseOutput(course)

			closeLoginDiv()

			userOutput(user, i)

		}

	}


}



//!----------------------------------

// login()
