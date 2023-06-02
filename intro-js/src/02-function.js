

const sayHello = (name = 'Andres', age = 0) => `Hola mundo function! ${name} edad ${age}`; 
const add = (a = 0, b = 0) => a + b; 
    
const result = sayHello('Pepe', 10);

console.log(result);
console.log(add(10, 5));