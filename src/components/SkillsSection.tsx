import { useState } from 'react';

export const SkillsSection = ({ skills }) => {
    const [totalPoints, setTotalPoints] = useState(10);
    const [skillsState, setSkillsState] = useState(
        skills.reduce((acc, skill) => {
            acc[skill] = 0;
            return acc;
        }, {} as { [key: string]: number })
    );

    const handleIncrement = (attribute: string) => {
        setSkillsState({
            ...skillsState,
            [attribute]: skillsState[attribute] + 1
        });
    }

    const handleDecrement = (attribute: string) => {
        setSkillsState({
            ...skillsState,
            [attribute]: skillsState[attribute] - 1
        });
    }

    return (
        <section className="App-section">
            {
                skills.map((skill) => (
                    <div key={skill}>
                            <div>
                            {skill.name}: 
                            {skillsState[skill]}
                            (Modifier: {skill.attributeModifier})
                            : {skillsState[skill]}
                            <button onClick={() => handleIncrement(skill)}>+</button>
                            <button onClick={() => handleDecrement(skill)}>-</button>
                            total: {skillsState[skill]}
                            </div>
                    </div>
                ))
            }
        </section>
    )
}