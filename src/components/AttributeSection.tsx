import { useState } from 'react';

export const AttributeSection = ({ attributes }) => {
    const [values, setValues] = useState<{ [key: string]: number }>(
        attributes.reduce((acc, attribute) => {
            acc[attribute] = 0;
            return acc;
        }, {} as { [key: string]: number })
    );

    const handleIncrement = (attribute: string) => {
        setValues({
            ...values,
            [attribute]: values[attribute] + 1
        });
    }

    const handleDecrement = (attribute: string) => {
        setValues({
            ...values,
            [attribute]: values[attribute] + 1
        });
    }

    return (
        <section className="App-section">
            {
                attributes.map((attribute) => (
                    <div key={attribute}>
                            <div>
                            {attribute}:
                            {values[attribute]}
                            (Modifier: {values[attribute] - 10})
                            <button onClick={() => handleIncrement(attribute)}>+</button>
                            <button onClick={() => handleDecrement(attribute)}>-</button>
                            </div>
                    </div>
                ))
            }
        </section>
    )
}