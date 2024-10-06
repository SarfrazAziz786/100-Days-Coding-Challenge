export default class Car {
    Brand;
    Model;
    constructor(brand, model) {
        this.Brand = brand;
        this.Model = model;
    }
    stock() {
        console.log(`This Brand ${this.Brand} Model ${this.Model} is out of stock`);
    }
}
