(() => {
    const addNumbers = (a: number, b: number) : number => a + b;
    const greetins = (name: string) : string => `Hello, ${name}`;
    const saveTheWorld = (): string => 'The world is safe';

    let myFunction : (x: number, y: number) => number;
    let myFunction1 : (x: string) => string;
    let myFunction2 : () => string;

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