(() => {
    let flash: {
        name: string, 
        age?: number, 
        powers: Array<string>,
        getName?: () => string
    } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaje en el tiempo']
    }
    console.log(flash);

    let superman: {
        name: string, 
        age?: number, 
        powers: Array<string>,
        getName?: () => string
    } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super Fuerza']
    }
    console.log(superman);
})();