(() => {
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        active: boolean,
        power: number
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    }

    //! Desestructuración tradicional
    const {power, vision } = avengers;
    console.log(power.toFixed(2), vision.toUpperCase());

    //! ...rest --> Resto de elementos del tipo
    const printAvenger = ({ironman, ...rest} : Avengers) => {
        console.log(ironman, rest);
    }

    printAvenger(avengers);
})();