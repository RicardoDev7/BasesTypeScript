(() => {

    type Hero = {
        name: string, 
        age?: number, 
        powers: Array<number>,
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }
    console.log(flash);

    let superman: Hero = {
        name: 'Clark Kent',
        powers: [1, 3],
        getName(){
            return this.name;
        }
    }
    console.log(superman);
    console.log(superman.getName!());
})();