"use strict";
(() => {
    let myCustomVariable = 'Ricardo';
    console.log({ myCustomVariable });
    myCustomVariable = 31;
    console.log({ myCustomVariable });
    myCustomVariable = {
        name: 'Ricardo',
        age: 31,
        powers: [7, 9, 10]
    };
    console.log({ myCustomVariable });
})();
//# sourceMappingURL=union-types.js.map