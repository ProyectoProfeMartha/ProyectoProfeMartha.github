const Registro = document.querySelector('#Registro')
Registro.addEventListener('submit', (e)=>{ e.preventDefault()
	const name= document.querySelector('#name').value
	const Matricula= document.querySelector('#Matricula').value
	const email= document.querySelector('#email').value
	const password= document.querySelector('#password').value

	const Users= JSON.parse(localStorage.getItem('users')) || []
	const isUserRegistered= Users.find(user => user.email === email)
	if(isUserRegistered){
		return alert ('El usuario ya esta registrado')
	}


Users.push({name: name, Matricula: Matricula, email: email, password: password})
localStorage.setItem('users', JSON.stringify(Users))
alert('Registro Exitoso!')

//Redireccion login

window.location.href ='Login.html'

})
