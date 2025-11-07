import * as EN from './characterEnums';

export default class CreateChar {
    name: string;
    race: string;

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
    }

    defaultAttack() {
        // melee
        const multiplier = EN.race[this.race as keyof typeof EN.race];
        return `Melee multiplier for ${this.race} is ${multiplier}`;
    }
}
