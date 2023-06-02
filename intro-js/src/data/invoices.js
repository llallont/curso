
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

const invoiceByClientName = (clienteNombre) => {
    return invoices.find( i => i.client.name == clienteNombre )
}


const invoiceById = (id) => { 
    return invoices.find( i => i.id === id )
}

const findInvoiceById = (id) => {
    const promise = new Promise( (resolve,reject) => {
        setTimeout( () => {
            const result = invoiceById(2);
            if(result)
                resolve(result);
            else
                reject('error: no existe la factura por el id!');
        }, 2500 )
    
    } );

    return promise;
}

export {
    paper,
    invoices,
    invoiceByClientName as default,
    invoiceById,
    findInvoiceById,
}