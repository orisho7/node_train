class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello ${this.name} long time no see... is your age ${this.age}?`);
    }
}

module.exports = Person;