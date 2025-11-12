// incomplete sandbox on pause
// cross ref with app/extend-class-example
// idea from an article that creates a custom method
// input an array of class definitions and reduce it to one class definitation
// and use the end return value (a single class definition) as a parent class

export default function CustomClassExtender() {
    const stardewValley = new Game('Stardew Valley');

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

const dummyArrowConst = (arg: string[]) => {
    return arg.reduce((acc, curr) => acc + curr);
};
