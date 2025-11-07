export default function CustomClassExtender() {
    return (
        <>
            <h1>Custom Class Extender</h1>
            <br />

            <section>
                <h2>Array reduce() example</h2>
                <p>{dummyArrowConst(['hello', ' ', 'world', ' ', ':)'])}</p>
                <br />
            </section>

            <section>
                <h2>Mixin? Custom Class extender?</h2>
                <p>My favourite game is {stardewValley.name}</p>
                <p></p>
            </section>
        </>
    );
}

class Game {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const stardewValley = new Game('Stardew Valley');

const dummyArrowConst = (arg: string[]) => {
    return arg.reduce((acc, curr) => acc + curr);
};
