// i this implementation, the main focus is how to work with class objects/instance
// tldr: render class instance in React component works,
// but it doesn't work the way I want it to, and
// it doesn't solve my problem
// need to look into other options: context api, useRef, useState, maybe a mix of them

// React docs say "you should treat any JavaScript object that you put into state as read-only"
// it doesn't like to make things really reactive
// and because how it is rendered, with debug console in
//    1. this file
//    2. dummy component
//    3. layout.tsx

// it is proven
//    1. when const anson changes in this file, it constructs a new class instance
//    2. and then re-render this component and display with the new instance
//    3. that triggers dummy component to re-render because it's nested
//    bonus point: when browswer navigate to a new page, it recreates on app level
//                 >>> [localhost:3000] to [3000/this-page]

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
