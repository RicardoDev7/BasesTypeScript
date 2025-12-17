(() => {
    const batman: string = 'Batman';
    const greenLantern: string = "Green Lantern";
    const blackVulcan: string = `Hero: Black Vulcan`;
    const abc = 123;
    console.log(`I'm '${batman.toUpperCase()}'`);
    console.log(`Longitud de '${greenLantern}' es: ${greenLantern.length}`);
    console.log(abc.toString());
    console.log(blackVulcan[30]?.toLowerCase() ?? 'No existe');
})();