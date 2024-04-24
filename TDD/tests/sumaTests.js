const suma = require("../suma")

/*
    La función debe devolver null si algún parámetro no es numérico.
    La función debe devolver 0 si no se pasó ningún parámetro
    La función debe poder realizar la suma correctamente. 
    La función debe poder hacer la suma con cualquier cantidad de números.
*/


console.log(`Test 1: La función debe devolver null si algún parámetro no es numérico`)
const resultTest1 = suma("a", 2);
if(resultTest1 === null){
    console.log(`   👌SUCCESS test 1`);
}else{
    console.log(`   ❌FAIL test 1`);
}

console.log(`Test 2: La función debe devolver 0 si no se pasó ningún parámetro`)
const resultTest2 = suma();
if(resultTest2 === 0){
    console.log(`   👌SUCCESS test 2`);
}else{
    console.log(`   ❌FAIL test 2`);
}

console.log(`Test 3: La función debe poder realizar la suma correctamente.`)
const resultTest3 = suma(2,2);
if(resultTest3 === 4){
    console.log(`   👌SUCCESS test 3`);
}else{
    console.log(`   ❌FAIL test 3`);
}

console.log(`Test 4: La función debe poder hacer la suma con cualquier cantidad de números.`)
const resultTest4 = suma(2,2,3,5,10);
if(resultTest4 === 22){
    console.log(`   👌SUCCESS test 4`);
}else{
    console.log(`   ❌FAIL test 4`);
}


