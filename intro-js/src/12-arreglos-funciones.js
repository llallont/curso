

const paper = {
    product: 'papel',
    price: 100,
    quantity: 1,
}

const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Jhon',
            lastName: 'prim',
            
        },
        items:[
            {
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1,
            },
            paper,
        ],
        
    },
    {
        id: 2,
        name: 'Compras de computo',
        client: {
            name: 'jose',
            lastName: 'mas',
            age: 20,
        },
        items:[
            {
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1,
            },
            {
                product: 'monitor',
                price: 100,
                quantity: 10,
            },
        ],
        
    },{
        id: 3,
        name: 'Compras papeleria',
        client: {
            name: 'maria',
            lastName: 'doter',
        },
        items:[
            {
                product: 'pencil',
                price: 50,
                quantity: 2,
            },
            paper,
            
        ],
        
    }
]

//obtiene arreglo de nombres del arrelglo
const invoicesName = invoices.map( i => i.name )


console.log(invoices)
console.log(invoicesName)

//obtiene arreglo de nombres de clientes del arrelglo
const invoicesClient = invoices.map( i => i.client.name)
console.log(invoicesClient)

//encuentra arreglo con id especifico
const invoiceById = invoices.find( i => i.id === 2 )
console.log(invoiceById)

//encuentra arreglo con nombre de cliente especifico
const invoiceByClientName = invoices.find( i => i.client.name == 'Jhon' )
console.log(invoiceByClientName)

//obtiene arreglo filtrando los id mayores a 1
const invoiceFilterId = invoices.filter( i => i.id > 1 )
console.log(invoiceFilterId)

//obtiene arreglo filtrando los id distitntos a 2
console.log('filter eliminar')
const invoiceDeleted = invoices.filter( i => i.id != 2 )
console.log(invoiceDeleted)

//obtiene arreglo filtrando el objeto pasado por referencia dentro del arreglo
const invoiceFilterPaper = invoices.filter( i => i.items.includes(paper) ) //lo encuentra porque usa el mismo objeto dentro del objeto y esta por referencia "paper"
console.log(invoiceFilterPaper)

//obtiene boleano del arreglo que coincida con el nombre del cliente
const result = invoices.some( i => i.client.name == 'Jhon' )
console.log(result)