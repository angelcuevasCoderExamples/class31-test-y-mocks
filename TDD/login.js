const users = [{user:'johndoe@email.com', password: 1234}]

const login = (user, password)=>{
    if(!user) return "No se ha proporcionado un usuario";
    if(!password) return "No se ha proporcionado un password";

    const foundUser = users.find(u=>u.user == user);
    if(!foundUser) return 'Credenciales incorrectas'
    if(foundUser && foundUser.password != password ) return 'Contraseña incorrecta'

    return 'logueado'
}

module.exports = login;