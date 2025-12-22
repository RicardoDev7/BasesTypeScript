(() => {
    /**
     * Clases en TypeScript
     */
    class Avenger {
        static averageAge: number = 35;
        static getAverageAge() : string {
            //! El this apunta al scope padre
            return this.name;
        }

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

        public bio() : string {
            return `${this.name} (${this.team})`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman.realName);
    console.log(Avenger.averageAge);
    console.log(antman.bio());
    console.log(Avenger.getAverageAge());
})();