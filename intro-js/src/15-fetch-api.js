

//regresa promesa
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient
// .then( resp => {
//     //console.log(resp)
//     resp.json()
//     .then( data => {
//         console.log(data)
//     } );
// } )

httpClient
.then( resp => resp.json() )
.then( data => console.log(data) )

console.log('hola que tal!')
