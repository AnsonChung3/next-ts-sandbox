'use client';
import { useState } from 'react';
import DummyComponent from '../../components/DummyComponent';

export default function ClassAndInstances() {
    console.log('create component');

    const [anson, setAnson] = useState({
        name: 'Anson',
        maxHp: 10,
        currentHp: 10,
    });
    const ansonCharacterSheet = new CreateCharacter(anson);
    return (
        <>
            <div>
                <h1>Class And Instances Page</h1>
                <h2>Hi {ansonCharacterSheet.name}!</h2>
                <p>Your max hp is {ansonCharacterSheet.maxHp}</p>
                <p>Your current hp is {anson.currentHp}</p>
                <button
                    onClick={() => {
                        ansonCharacterSheet.takeDamage(3);
                        setAnson({
                            ...anson,
                            currentHp: ansonCharacterSheet.currentHp,
                        });
                    }}
                >
                    Hit!
                </button>
            </div>
            <DummyComponent name="This is so dumb" />
        </>
    );
}

class CreateCharacter {
    name: string;
    maxHp: number;
    currentHp: number;

    constructor(data: { name: string; maxHp: number; currentHp: number }) {
        console.log('construct');
        this.name = data.name;
        this.maxHp = data.maxHp;
        this.currentHp = data.currentHp;
    }

    takeDamage(damage: number) {
        console.log('reduce health');
        this.currentHp = reduceHp(damage, this.currentHp);
    }
}

function reduceHp(damage: number, hp: number) {
    return hp - damage;
}
