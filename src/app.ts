/**
 * Función anonima autoejecutable
 */
(() => {
    const a: number = 10;
    function sayHello(message: string){
        console.log(`${message} - ${a}`);
    }
    sayHello('Hello TypeScript');
})();