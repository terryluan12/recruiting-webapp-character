import { AttributeSection } from './AttributeSection'
import { ClassSection } from './ClassSection'
import { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts';

export const PersonSection = () => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [attributeState, setAttributeState] = useState<{ [key: string]: number }>(
        ATTRIBUTE_LIST.reduce((acc, attribute) => {
            acc[attribute] = 10;
            return acc;
        }, {} as { [key: string]: number })
    );

    return (
        <section className="App-section">
            <AttributeSection attributes={ATTRIBUTE_LIST} totalPoints={totalPoints} attributeState={attributeState} setAttributeState={setAttributeState} />
            <ClassSection classes={CLASS_LIST} attributeState={attributeState} />
        </section>
    )
}