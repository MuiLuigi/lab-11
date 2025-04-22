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
        console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}


//Adding Inheritance
class PerishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        
    }
}