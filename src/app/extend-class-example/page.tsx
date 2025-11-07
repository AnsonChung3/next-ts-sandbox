export default function ExtendClass() {
    const d = new Dog();
    const e = new Derived();
    return (
        <>
            <h1>Class extension</h1>
            <section>
                <h2>DOG</h2>
                <h3>dog move</h3>
                <p>{d.move()}</p>
                <h3>dog woof</h3>
                <p>{d.woof(3)}</p>
            </section>
            <section>
                <h2>BASE</h2>
                <h3>greet</h3>
                <p>{e.greet()}</p>
                <h3>super greet</h3>
                <p>{e.greet('reader')}</p>
            </section>
        </>
    );
}
class Animal {
    move() {
        return 'Moving along!';
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            return 'woof!';
        }
    }
}

class Base {
    greet() {
        return 'Hello, world!';
    }
}

class Derived extends Base {
    // this is the example from ts docs
    // but it gives error
    // "Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'."

    // greet(name?: string) {
    //     if (name === undefined) {
    //         super.greet();
    //     } else {
    //         return `Hello, ${name.toUpperCase()}`;
    //     }
    // }
    greet(name?: string): string {
        if (name === undefined) {
            return super.greet(); // return added here
        } else {
            return `Hello, ${name.toUpperCase()}`;
        }
    }
}
