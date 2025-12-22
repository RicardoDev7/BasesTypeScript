(() => {
    /**
     * Clases en TypeScript
     */
    class Avenger {
        static averageAge: number = 35;

        constructor(
            private name: string, 
            public team: string, 
            public realName?: string
        )
        {
            this.name = name;
            this.team = team;
            this.realName = realName ?? '';
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman.realName);
    console.log(Avenger.averageAge);
})();