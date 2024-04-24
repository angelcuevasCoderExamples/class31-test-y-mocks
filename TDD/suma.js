const suma = (...numeros)=>{
    if(numeros.length  === 0) return 0;
    if(!numeros.every(n=>typeof n == 'number')) return null
    return numeros.reduce((acum,n)=>acum+n,0); 
}

module.exports = suma;

