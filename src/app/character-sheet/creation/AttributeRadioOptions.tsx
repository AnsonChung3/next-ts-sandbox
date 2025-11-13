'use client';

type RadioOpsProps = {
    attribute: string;
    keys: Array<string>;
    onRadioChange: (value: string) => void;
};

export default function AttributeRadioOptions({
    attribute,
    keys,
    onRadioChange,
}: RadioOpsProps) {
    console.log('attribute radio options');
    return (
        <>
            {keys.map((key) => {
                return (
                    <div key={key}>
                        <input
                            name={attribute}
                            type="radio"
                            value={key}
                            onChange={(e) => {
                                console.log('on change inside radio');
                                onRadioChange(e.target.value);
                            }}
                        />
                        <label>{key}</label>
                    </div>
                );
            })}
        </>
    );
}
