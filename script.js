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