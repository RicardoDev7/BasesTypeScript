(() => {
    let nothing: (number | null | undefined) = null;
    console.log(nothing);
    nothing = undefined;
    console.log(nothing);
    nothing = 1;
    console.log(nothing);
})();