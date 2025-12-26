(() => {
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string){

        }

        //!Singleton -> Principio singleton
        static callApocalipsis() : Apocalipsis{
            if(!this.instance){
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis, el único');
            }
            return this.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();