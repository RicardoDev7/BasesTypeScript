(() => {
    let avengers: number = 10;
    console.log({avengers});
    const villains: number = 20;
    console.log({villains});
    if(avengers < villains){
        console.log("We are in trouble");
    }else{
        console.log("We are safe");
    }
    /**
     * NaN -> Not a Number is a special number in JS
     */
    avengers = Number("55A");
    console.log({avengers});
})();