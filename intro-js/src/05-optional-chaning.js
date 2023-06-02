

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
        adress: []
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
            product: 'papel',
            price: 100,
            quantity: 10,
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity
        } );
        return total;
    },
    greeting: function(){ 
        return `Hola ${this.client.name}` //this sin function no funciona
    }
};


console.log(invoice.company?.name)
console.log(invoice.client?.adress?.street) //valida la existencia de las propiedades
if(invoice.company != undefined && invoice.company.name){ //se hacia asi antes
    console.log('perfecto!!!')
} else {
    console.log('no viene la empresa')
}