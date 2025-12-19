(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman : Avenger = {
        name: "Tony Stark",
        weapon: "Armor Suit"
    }

    const captainAmerica : Avenger = {
        name: "Steve Rogers",
        weapon: "Shield"
    }

    const thor : Avenger = {
        name: "Thor Odinson",
        weapon: "Martillo"
    }

    const avengers : Avenger[] = [ironman, thor, captainAmerica];

    for (const ave of avengers) {
        console.log(ave);
    }
})();