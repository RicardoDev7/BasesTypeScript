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
//# sourceMappingURL=type.js.map