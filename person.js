export class Person {
    Name;
    constructor(name) {
        this.Name = name;
    }
    greet() {
        console.log(`Hello i'm ${this.Name}`);
    }
}
