(() => {
    class Avenger{
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor avenger llamado');
        }
        private getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }
        public getFullNameFromXmen() : string {
            return `${this.name} ${this.realName}`;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getFullNameFromXmen());
})();

/**
 * La diferencia entre private y protected.
 * Las variables protected pueden ser visualizadas y consumidas desde clases que extiendan de la clase padre
 */