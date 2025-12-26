(() =>{
    interface addTwoNumbers {
        (a: number, b: number) : number;
    }
    let addNumbersFunction : addTwoNumbers;

    addNumbersFunction = (number1: number, number2: number) : number => {
        return number1 + number2;
    }

    console.log(addNumbersFunction(1, 2));
})();