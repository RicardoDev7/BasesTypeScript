(() => {
    let avenger: any = 123;
    console.log({avenger});
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0));
    avenger = 150.1235431;
    console.log(<number>avenger.toFixed(2));
    console.log({exists});
    console.log({power});
})();