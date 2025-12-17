(() => {
    const numbers: Array<number> = [1, 2, 3, 4, 5, 6];
    numbers.push(7);
    console.log('Numbers:', numbers);
    const villains: Array<string> = ['Thanos', 'Loki', 'Ultron'];
    villains.forEach((villain, i) => console.log(`Villain: ${i + 1}`, villain));
})();