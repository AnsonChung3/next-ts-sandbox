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
        const selfEl: number =
            EN.element[this.element as keyof typeof EN.element];
        const attackEl: number = EN.element['water'];
        const damage = 5;

        const elementMulti = elementMultiplier(selfEl, attackEl);

        const dmgReceived = Math.ceil(damage * elementMulti);
        return `Given self element is ${this.element}; Attack element is water; incoming damgage = 5. Damage received is ${dmgReceived}`;
    }
}

const elementMultiplier = (self: number, enemy: number) => {
    if (self === enemy - 1 || (self === EN.elCount - 1 && enemy === 1)) {
        // player is weak against enemy
        return 2;
    }

    if (self === enemy + 1 || (self === 1 && enemy === EN.elCount - 1)) {
        return 0.5;
    }

    return 1;
};
