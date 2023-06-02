
// httpClient
// .then( resp => resp.json() )
// .then( data => console.log(data) )

//await espera a que se procesen los datos para obtenerlos en las promesas
const findAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const ul = document.createElement('ul');

    users.forEach(user => {
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name)
    });

    document.getElementById('root').append(ul);
}

findAllUsers();

// console.log(users);
console.log('hola que tal!')
