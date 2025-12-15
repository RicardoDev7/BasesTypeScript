(() => {
    const hero: string = 'Flash';
    function returnName() : string {
        return hero;
    }
    console.log(returnName());
    const activeBatSignal = () : string => {
        return 'Batiseñal activada';
    }
    console.log(activeBatSignal());
    console.log(typeof activeBatSignal);
})();