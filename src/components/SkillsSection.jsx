import { useState } from 'react';

export const SkillsSection = ({ skills, modifiers, skillsState, setSkillsState }) => {
    const [totalPoints, setTotalPoints] = useState(Math.max(10 + 4 * modifiers["Intelligence"], 0));

    const handleIncrement = (attribute) => {
        if(totalPoints == 0) {
            alert("Error: You have reached the minimum number of points.");
            return
        }
        setSkillsState({
            ...skillsState,
            [attribute]: skillsState[attribute] + 1
        });
        setTotalPoints(totalPoints - 1);
    }

    const handleDecrement = (attribute) => {
        if(skillsState[attribute] == 0) {
            alert("Error: You have reached the minimum number of points.");
            return
        }
        setSkillsState({
            ...skillsState,
            [attribute]: skillsState[attribute] - 1
        });
        setTotalPoints(totalPoints + 1);
    }

    return (
        <section className="Skills-section">
        <h1>Skills</h1>
        <h2>Points Remaining: {totalPoints}</h2>
            {
                Object.entries(skills).map(([key, skill]) => (
                    <div key={skill.name}>
                            <div>
                            {skill.name}: 
                            {skillsState[skill.name]}
                            (Modifier: {skill["attributeModifier"]})
                            : {skillsState[skill.name] + modifiers[skill["attributeModifier"]]}
                            <button onClick={() => handleIncrement(skill.name)}>+</button>
                            <button onClick={() => handleDecrement(skill.name)}>-</button>
                            total: {skillsState[skill.name]}
                            </div>
                    </div>
                ))
            }
        </section>
    )
}