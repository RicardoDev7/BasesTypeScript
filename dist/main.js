"use strict";
(() => {
    class Avenger {
        name = '';
        team = '';
        realName;
        static averageAge = 35;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger('Antman', 'Capitan', 'Kris');
    console.log(antman);
    console.log(Avenger.averageAge);
})();
//# sourceMappingURL=main.js.map