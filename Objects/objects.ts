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
    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Super fuerza'],
        getName(){
            return this.name;
        }
    }
    console.log(flash);
    console.log(flash.getName!());
})();