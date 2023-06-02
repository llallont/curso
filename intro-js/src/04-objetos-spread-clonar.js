

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

//const invoice2 = invoice; esto pasa por reference mismo objeto
const invoice2 = { ...invoice } //clona el objeto son distintos

const result = invoice == invoice2;

//console.log(result);

if(result){ 
    console.log(result);
}
else{ 
    console.log('no son iguales')
}


invoice2.id = 20;
console.log(invoice.id)
console.log(invoice2.id)