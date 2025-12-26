(() => {
    //! Sirven para crear otras clases o que otras clases la implementen. No para inicilizarlas
    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(): string{
            return 'Salvar el mundo';
        }
    }
    class Villain extends Mutante{
        conquistaMundo() : string {
            return 'Conquista el mundo';
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villain = new Villain('Magneto', 'Maguns');
    //console.log(wolverine);
    //console.log(wolverine.salvarMundo());
    //console.log(magneto);
    //console.log(magneto.conquistaMundo());

    const printName = (character: Mutante) => {
        console.log(character.realName);
    }

    //printName(wolverine);
    //printName(magneto);
})();