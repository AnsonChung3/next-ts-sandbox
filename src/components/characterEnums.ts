export { race, profession, element, elCount };

enum race {
    // indentifier and add to default maxHp
    human,
    elf,
    beast,
    orc,
}

enum profession {
    // for enabling using of weapon
    // and/or weapon damage dealt?
    widzard = 1,
    ranger,
    rogue,
    fighter,
}

enum element {
    // for calculate damage taken
    fire = 1,
    water,
    earth,
    wood,
}

const elCount = Object.keys(element).length / 2;
