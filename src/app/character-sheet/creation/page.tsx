'use client';

import { useState } from 'react';
import * as EN from '../characterEnums';
import AttributeRadioOptions from './AttributeRadioOptions';

export default function CreatCharacter() {
    const RACES = radioOptionKeys(EN.race);

    const [charRace, setCharRace] = useState('');

    return (
        <>
            <h1>Create Character</h1>
            <AttributeRadioOptions
                attribute="race"
                keys={RACES}
                onRadioChange={setCharRace}
            />
            <p>charRace = {charRace}</p>
        </>
    );
}

function radioOptionKeys(targetEnum: any) {
    return Object.keys(targetEnum).filter((key) => isNaN(Number(key)));
}
