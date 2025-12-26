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
    const client = {
        name: 'Ricardo',
        age: 31,
        address: {
            id: 123,
            city: 'Lima'
        }
    };
    console.log(client);
})();
//# sourceMappingURL=main.js.map