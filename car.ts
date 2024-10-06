export default class Car {
    Brand:string
    Model:number
    constructor(brand:string, model:number){
        this.Brand=brand
        this.Model=model
    }
    
    stock(){
        console.log(`This Brand ${this.Brand} Model ${this.Model} is out of stock`);
    }

}

