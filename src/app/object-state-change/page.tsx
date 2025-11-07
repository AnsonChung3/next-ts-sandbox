// ref class-and-instances/page.tsx for notes

'use client';
import { useState } from 'react';

export default function ChangeObjectProperty() {
    console.log('call change object property');

    const [anson, setAnson] = useState(ANSON);

    return (
        <>
            <div>
                <h1>Object State Change Page</h1>
                <h2>Hi {anson.name}!</h2>
                <p>Your hp is {anson.hp}</p>
                <button
                    onClick={() => {
                        setAnson({
                            ...anson,
                            hp: minusOne(anson.hp),
                        });
                    }}
                >
                    Press
                </button>
            </div>
        </>
    );
}

const ANSON = {
    name: 'Anson',
    hp: 10,
};

function minusOne(n: number) {
    console.log('minus one, n = ', n);
    return n - 1;
}
