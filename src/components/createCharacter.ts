import * as EN from './characterEnums';

export default class CreateChar {
    name: string;
    race: string;
    element: string;

    constructor(name: string, race: string, element: string) {
        this.name = name;
        this.race = race;
        this.element = element;
    }

    defaultAttack() {
        // melee
        const multiplier = EN.race[this.race as keyof typeof EN.race];
        return `Melee multiplier for ${this.race} is ${multiplier}`;
    }

    takeDamage() {
        let multiplier = 1;
        const selfEl: number =
            EN.element[this.element as keyof typeof EN.element];
        const attackEl: number = EN.element['water'];
        const damage = 5;

        if (
            selfEl === attackEl - 1 ||
            (selfEl === EN.elCount - 1 && attackEl === 1)
        ) {
            // player is weak against enemy
            multiplier = 2;
        }

        if (
            selfEl === attackEl + 1 ||
            (selfEl === 1 && attackEl === EN.elCount - 1)
        ) {
            multiplier = 0.5;
        }

        const dmgReceived = Math.ceil(damage * multiplier);
        return `Given self element is ${this.element}; Attack element is water; incoming damgage = 5. Damage received is ${dmgReceived}`;
    }
}
