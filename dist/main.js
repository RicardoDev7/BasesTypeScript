"use strict";
(() => {
    class Mutante {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Salvar el mundo';
        }
    }
    class Villain extends Mutante {
        conquistaMundo() {
            return 'Conquista el mundo';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Maguns');
    console.log(wolverine);
    console.log(wolverine.salvarMundo());
    console.log(magneto);
    console.log(magneto.conquistaMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        name;
        team;
        realName;
        static averageAge = 35;
        static getAverageAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName ?? '';
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameFromXmen() {
            return `${this.name} ${this.realName}`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'New Name - Ricardo';
})();
//# sourceMappingURL=main.js.map