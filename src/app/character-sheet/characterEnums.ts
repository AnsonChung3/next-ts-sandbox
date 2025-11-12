export { race, profession, element, enumCount };

function enumCount(targetEnum: any): number {
    // type for targetEnum is set to explicit any
    // in itself is not ideal, it is just lazy
    return Object.keys(targetEnum).length / 2;
}

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
