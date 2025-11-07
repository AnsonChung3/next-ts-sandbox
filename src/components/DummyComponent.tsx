export default function DummyComponent({ name }: { name: string }) {
    console.log('render dummy component');
    return (
        <>
            <div>
                <p>{name}</p>
            </div>
        </>
    );
}
