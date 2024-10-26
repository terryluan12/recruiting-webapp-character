import { AttributeSection } from './AttributeSection'
import { ClassSection } from './ClassSection'
import { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts';
import { SkillsSection } from './SkillsSection';

export const PersonSection = () => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [attributeState, setAttributeState] = useState<{ [key: string]: number }>(ATTRIBUTE_LIST.reduce((acc, attribute) => {
        acc[attribute] = 10;
        return acc;
    }, {} as { [key: string]: number }));
    const [modifierState, setModifierState] = useState<{ [key: string]: number }>(ATTRIBUTE_LIST.reduce((acc, attribute) => {
        acc[attribute] = 0;
        return acc;
    }, {} as { [key: string]: number }));

    return (
        <section className="App-section">
            <AttributeSection attributes={ATTRIBUTE_LIST} totalPoints={totalPoints} setTotalPoints={setTotalPoints} 
                              attributeState={attributeState} setAttributeState={setAttributeState}
                              modifierState={modifierState} setModifierState={setModifierState} />
            <ClassSection classes={CLASS_LIST} attributeState={attributeState} />
            <SkillsSection skills={SKILL_LIST} />
        </section>
    )
}