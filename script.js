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
        products.forEach(product => {
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

//Store Management
class ClassProperties {
    constructor() {
        this.products = []  //Array to store products and their information
    }

    addProduct(product) {
        this.products.push(product);
    }

    getInventoryValue() {
        return this.products.reduce((totalPrice, product) => totalPrice + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.products.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;   //Returns the name of the product even if the user doesn't enter the name of the product exactly the same way
    }
}

const product1 = new PerishableProductProperties("Soap", 2.99, 2, "04-23-2025");  //Instance 1
const product2 = new PerishableProductProperties("Bread", 1.99, 3, "04-25-2025");  //Instance 2


//Testing the System
const product3 = new productProperties("Mario Kart 8 Deluxe", 49.99, 1);  //Instance 3
const product4 = new productProperties("Milk", 2.99, 2);  //Instance 4
const product5 = new productProperties("Cookies", 3.99, 4);  //Instance 5

const productStore = new ClassProperties();  //Adding products to the array
productStore.addProduct(product1);
productStore.addProduct(product2);
productStore.addProduct(product3);
productStore.addProduct(product4);
productStore.addProduct(product5);

console.log(`Your total is: $${productStore.getInventoryValue()}.`);

productProperties.applyDiscount(productStore.products, 0.15);  //Applies the 15% discount

console.log(`Your total after applying the discount is: $${productStore.getInventoryValue().toFixed(2)}.`);

const findProduct = "mario kart 8 deluxe";
const productFound = productStore.findProductByName(findProduct);

if (productFound) {
    console.log(productFound.toString());
}
else {
    console.log("The product is not available.");
}