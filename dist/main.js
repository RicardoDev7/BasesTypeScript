"use strict";
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
    console.log(antman.realName);
    console.log(Avenger.averageAge);
    console.log(antman.bio());
    console.log(Avenger.getAverageAge());
})();
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
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
            console.log('Constructor Xmen llamado');
        }
        getFullNameFromXmen() {
            return `${this.name} ${this.realName}`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getFullNameFromXmen());
})();
//# sourceMappingURL=main.js.map