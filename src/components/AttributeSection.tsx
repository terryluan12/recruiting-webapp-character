import { useState } from 'react';

export const AttributeSection = ({ attributes, totalPoints, setTotalPoints, attributeState, setAttributeState, modifierState, setModifierState }) => {
    const handleIncrement = (attribute: string) => {
        if(totalPoints == 70) {
            alert("Error: You have reached the maximum number of points.");
            return
        }
        setTotalPoints(totalPoints + 1);
        setModifierState({
            ...modifierState,
            [attribute]: Math.floor((attributeState[attribute] - 9)/2)
        });
        setAttributeState({
            ...attributeState,
            [attribute]: attributeState[attribute] + 1
        });
        console.log("Attribute State: ", attributeState);
        console.log("Modifier State: ", modifierState);
    }

    const handleDecrement = (attribute: string) => {
        setTotalPoints(totalPoints - 1);
        setModifierState({
            ...modifierState,
            [attribute]: Math.floor((attributeState[attribute] - 11)/2)
        });
        setAttributeState({
            ...attributeState,
            [attribute]: attributeState[attribute] - 1
        });
    }

    return (
        <section className="App-section">
            {
                attributes.map((attribute) => (
                    <div key={attribute}>
                            <div>
                            {attribute}:
                            {attributeState[attribute]}
                            (Modifier: {modifierState[attribute]})
                            <button onClick={() => handleIncrement(attribute)}>+</button>
                            <button onClick={() => handleDecrement(attribute)}>-</button>
                            </div>
                    </div>
                ))
            }
        </section>
    )
}