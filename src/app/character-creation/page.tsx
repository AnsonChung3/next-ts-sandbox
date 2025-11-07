import * as EN from '../../components/characterEnums';
import CreateChar from '../../components/createCharacter';

export default function CharacterCreation() {
    const dummyChar = new CreateChar('anson', 'human');
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
            </div>
        </>
    );
}
