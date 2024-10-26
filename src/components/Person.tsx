import { AttributeSection } from './AttributeSection'
import { ClassSection } from './ClassSection'
import { useEffect, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts';
import { SkillsSection } from './SkillsSection';

export const PersonSection = ({pid, setPeople}) => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [attributeState, setAttributeState] = useState<{ [key: string]: number }>(ATTRIBUTE_LIST.reduce((acc, attribute) => {
        acc[attribute] = 10;
        return acc;
    }, {} as { [key: string]: number }));
    const [modifierState, setModifierState] = useState<{ [key: string]: number }>(ATTRIBUTE_LIST.reduce((acc, attribute) => {
        acc[attribute] = 0;
        return acc;
    }, {} as { [key: string]: number }));
    const [skillsState, setSkillsState] = useState<{ [key: string]: number }>(SKILL_LIST.reduce((acc, skill) => {
        acc[skill.name] = 0;
        return acc;
    }
    , {} as { [key: string]: number }));

    useEffect(() => {
        const classState = {
            pid: pid,
            attributeState: {...attributeState},
            modifierState: {...modifierState},
            skillsState: {...skillsState}
        };
        setPeople((prevPeople) => {
            const newPeople = prevPeople.slice();
            newPeople[pid] = classState;
            return newPeople;
        });

    })

    return (
        <section className="App-section">
            <AttributeSection attributes={ATTRIBUTE_LIST} totalPoints={totalPoints} setTotalPoints={setTotalPoints} 
                              attributeState={attributeState} setAttributeState={setAttributeState}
                              modifierState={modifierState} setModifierState={setModifierState} />
            <ClassSection classes={CLASS_LIST} attributeState={attributeState} />
            <SkillsSection skills={SKILL_LIST} modifiers={modifierState} skillsState={skillsState} setSkillsState={setSkillsState}/>
        </section>
    )
}