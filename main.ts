type Product= {
    name: string;
    price: number;
    quantity: number;
}
let product:Product={
    name: "Phone",
    price: 45000,
    quantity: 8
}

let calculatePrice= (product: Product)=>{
    return `Total price of ${product.name} is ${product.price*product.quantity}`;
}
console.log(calculatePrice(product));
