import { useState, useEffect } from 'react';
export const ClassSection = ({ classes, attributeState }) => {
    const [isClassState, setIsClassState] = useState({});
    useEffect(() => {
        const classState = {};
        
        for (const [className, attributes] of Object.entries(classes)) {
            classState[className] = true;

            for (const [attribute, requiredValue] of Object.entries(attributes)) {
                if (!attributeState[attribute] || attributeState[attribute] < requiredValue) {
                    classState[className] = false;
                    break; // Exit the loop as we found a failing condition
                }
            }
        }
        
        setIsClassState(classState);
    }, [attributeState, classes]);
    

    return (
        <section className="Class-Section">
            {Object.keys(classes).map((classType) => (
                <div key={classType}>
                    <div className={isClassState[classType] ? 'red' : 'white'}>
                        {isClassState[classType] ? classType : "NOT"}
                    </div>
                </div>
            ))}
        </section>
    );
}