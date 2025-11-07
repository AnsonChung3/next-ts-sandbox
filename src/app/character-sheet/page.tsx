import * as EN from '../../components/characterEnums';
import PlayerChar from '../../components/playerCharacter';

export default function CharacterSheet() {
    const dummyChar = new PlayerChar('anson', 'human', 'fire');
    return (
        <>
            <div>
                <h1>Enums</h1>
                <p>human is index {EN.race['human']} in enum</p>
                <br />
            </div>

            <div>
                <h1>Dummy Character</h1>
                <p>
                    Dummy character is {dummyChar.name}.{' '}
                    {dummyChar.defaultAttack()}
                </p>
                <p>{dummyChar.takeDamage()}</p>
            </div>
        </>
    );
}
