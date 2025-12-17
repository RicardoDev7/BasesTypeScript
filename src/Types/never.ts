(() => {
    /**
     * Never: indicates a value that never occurs.
     * Functions that always throw an error or never return have a return type of never.
     */
    const abc = (message: string): never => {
        throw new Error(message);
    };
    abc('Error!!!!');
})();