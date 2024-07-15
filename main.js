var product = {
    name: "Phone",
    price: 45000,
    quantity: 8
};
var calculatePrice = function (product) {
    return "Total price of ".concat(product.name, " is ").concat(product.price * product.quantity);
};
console.log(calculatePrice(product));
