//Setting up the classes
class productProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }

    //Static Methods and Properties
    static applyDiscount(products, discount) {
        products.array.forEach(product => {
            product.price = product.price * (1 - discount);
            console.log(`The discount has been applied to: ${this.name}. The price after the discount is: $${product.price.toFixed(2)}`)
        });
    }
}


//Adding Inheritance
class PerishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;  //Added the new property
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;  //Returns all the information with the expiration date now added to the information
    }
}

class ClassProperties {
    constructor() {
        this.products = []  //Array to store products and their information
    }
}



const product1 = new PerishableProductProperties("Soap", 2.99, 2, "04-23-2025");  //Instance 1
const product2 = new PerishableProductProperties("Bread", 1.99, 3, "04-25-2025");  //Instance 2