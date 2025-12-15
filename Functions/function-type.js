"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greetins = (name) => `Hello, ${name}`;
    const saveTheWorld = () => 'The world is safe';
    let myFunction;
    let myFunction1;
    let myFunction2;
    //! myFunction = 10;
    //! console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction);
    console.log(myFunction(1, 2));
    myFunction1 = greetins;
    console.log(myFunction1);
    console.log(myFunction1('Ricardo'));
    myFunction2 = saveTheWorld;
    console.log(myFunction2);
    console.log(myFunction2());
})();
//# sourceMappingURL=function-type.js.map