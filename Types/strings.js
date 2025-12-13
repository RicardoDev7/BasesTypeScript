"use strict";
(() => {
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    const blackVulcan = `Hero: Black Vulcan`;
    const abc = 123;
    console.log(`I'm '${batman.toUpperCase()}'`);
    console.log(`Longitud de '${greenLantern}' es: ${greenLantern.length}`);
    console.log(abc.toString());
    console.log(blackVulcan[30]?.toLowerCase() ?? 'No existe');
})();
//# sourceMappingURL=strings.js.map