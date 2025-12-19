"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    };
    const { power, vision } = avengers;
    console.log(power.toFixed(2), vision.toUpperCase());
    const printAvenger = ({ ironman, ...rest }) => {
        console.log(ironman, rest);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [cap, ironman,] = avengersArr;
    console.log(avengersArr);
    console.log(ironman);
    console.log(cap);
})();
(() => {
    let a = 'let';
    console.log(a);
    const name = 'Ricardo';
    const getName = () => {
        console.log(name);
    };
    getName();
})();
//# sourceMappingURL=main.js.map