(() => {
    
    type Hero = {
        name: string, 
        age?: number, 
        powers: Array<number>,
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Ricardo';
    console.log({myCustomVariable});
    myCustomVariable = 31;
    console.log({myCustomVariable});
    myCustomVariable = {
        name: 'Ricardo',
        age: 31,
        powers: [7, 9, 10]
    }
    console.log({myCustomVariable});
})();