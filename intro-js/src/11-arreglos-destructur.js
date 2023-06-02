

const users = ['Pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa']

const [pepe, ana, maria, ...resto] = users; 

console.log(pepe, ana, maria, ...resto)