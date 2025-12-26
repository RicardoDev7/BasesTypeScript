"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        powers: [1, 3],
        getName() {
            return this.name;
        }
    };
    console.log(superman);
    console.log(superman.getName());
})();
(() => {
    class Mutant {
        age;
        name;
        realName;
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            throw new Error("Method not implemented.");
        }
    }
})();
(() => {
    const client = {
        name: 'Ricardo',
        age: 31,
        address: {
            id: 123,
            city: 'Lima'
        },
        getFullAddress(id) {
            console.log(this.address?.city);
        }
    };
    console.log(client);
    console.log(client.getFullAddress(1));
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (number1, number2) => {
        return number1 + number2;
    };
    console.log(addNumbersFunction(1, 2));
})();
//# sourceMappingURL=main.js.map