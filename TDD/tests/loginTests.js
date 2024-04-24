/*
    Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
    Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
    Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
    Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
    Si  el usuario y contraseña coinciden, consologuear (“logueado”)
*/

const login = require("../login")

console.log(`Test 1: Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)`)
const resultTest1 = login('johndoe@email.com')
if(resultTest1 === 'No se ha proporcionado un password'){
    console.log(`   👌 SUCCESS Test 1`)
}else{
    console.log(`   ❌ FAIL Test 1`)
}

console.log(`Test 2: Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)`)
const resultTest2 = login()
if(resultTest2 === 'No se ha proporcionado un usuario'){
    console.log(`   👌 SUCCESS Test 2`)
}else{
    console.log(`   ❌ FAIL Test 2`)
}


console.log(`Test 3: Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)`)
const resultTest3 = login('johndoe@email.com', 123)
if(resultTest3 === 'Contraseña incorrecta'){
    console.log(`   👌 SUCCESS Test 3`)
}else{
    console.log(`   ❌ FAIL Test 3`)
}

console.log(`Test 4: Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)`)
const resultTest4 = login('janedoe@email.com', 123)
if(resultTest4 === 'Credenciales incorrectas'){
    console.log(`   👌 SUCCESS Test 4`)
}else{
    console.log(`   ❌ FAIL Test 4`)
}

console.log(`Test 5: Si  el usuario y contraseña coinciden, consologuear (“logueado”)`)
const resultTest5 = login('johndoe@email.com', 1234)
if(resultTest5 === 'logueado'){
    console.log(`   👌 SUCCESS Test 5`)
}else{
    console.log(`   ❌ FAIL Test 5`)
}