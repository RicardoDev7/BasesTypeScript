(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }
    interface Human {
        age: number
    }
    class Mutant implements Xmen, Human {
        constructor(
            public age: number,
            public name: string,
            public realName: string,
        ){
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id: number): string {
            throw new Error("Method not implemented.");
        }
    }
})();