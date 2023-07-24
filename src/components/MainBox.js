import React, { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js'; // Import SKILL_LIST from consts.js



const MainBox = ({ children }) => {
    const classHeaders = Object.keys(CLASS_LIST);
    const [selectedClass, setSelectedClass] = useState(null);
  
    const [attributes, setAttributes] = useState({
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    });
    
      // Helper function to calculate the total attribute value
  const calculateTotalAttributeValue = () => {
    const total = ATTRIBUTE_LIST.reduce((acc, attribute) => acc + attributes[attribute], 0);
    return total;
  };

    const handleIncrement = (attribute) => { // Increment Handler for Attribute List
        const total = calculateTotalAttributeValue();
    
        // Check if the total attribute value is less than 70 before incrementing
        if (total + 1 <= 70) {
          setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attribute]: prevAttributes[attribute] + 1,
          }));
        } else {
          alert("Maximum total attribute value (70) reached.");
        }
      };

const handleDecrement = (attribute) => { // Decrement Handler for Attribute List
    setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: prevAttributes[attribute] - 1,
    }));
};

const doesCharacterMeetRequirements = (className) => { // Character Requirements Check
    const classRequirements = CLASS_LIST[className];
    for (const attribute in classRequirements) {
      if (attributes[attribute] < classRequirements[attribute]) {
        return false;
      }
    }
    return true;
  };

  
const getAbilityModifier = (value) => {  // Helper function to calculate the ability modifier for a given attribute value
    const modifier = Math.floor((value - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
};
    
  return (
    <div style={mainBoxContainerStyle}>
      <div style={mainBoxStyle}>
        <div style={mainBoxStyle}>
          {children}
        </div>
        <div style={verticalBoxContainerStyle}>
          <div style={verticalBoxStyle}>
            <h1>Attributes</h1>
            {ATTRIBUTE_LIST.map((attribute) => {
              const attributeValue = attributes[attribute];
              const modifier = getAbilityModifier(attributeValue); // Ability Modifier
              return (
                <div key={attribute} style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center' }}>
                  <p style={{ flex: 1 }}>
                    {attribute}: {attributeValue} (Modifier: {modifier})
                  </p>
                  <button className="square-button" onClick={() => handleIncrement(attribute)}>+</button>
                  <button className="square-button" onClick={() => handleDecrement(attribute)}>-</button>
                </div>
              );
            })}
          </div>
          <div style={verticalBoxStyle}>
            <h1>Classes</h1>
            {classHeaders.map((className) => (
              <div key={className} onClick={() => setSelectedClass(className)} className={doesCharacterMeetRequirements(className) ? 'meets-requirements' : ''}>
                {className}
              </div>
            ))}
          </div>
          {selectedClass && (
            <div style={statisticsBoxStyle}>
              <h1>Minimum Required Statistics</h1>
              {Object.entries(CLASS_LIST[selectedClass]).map(([attribute, value]) => (
                <p key={attribute}>
                  {attribute}: {value}
                </p>
              ))}
              <button onClick={() => setSelectedClass(null)}>Collapse</button>
            </div>
          )}
          
          <div style={verticalBoxStyle}>
            <h1>Skills</h1>

          </div>
        </div>
      </div>
    </div>
  );
};

const mainBoxContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const mainBoxStyle = {
  border: '2px solid white',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  boxSizing: 'border-box',
  padding: '20px',
  maxWidth: '1400px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
};

const verticalBoxContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
};

const statisticsBoxStyle = {
    border: '1px solid white',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
    padding: '10px',
    maxWidth: '400px',
  };

const verticalBoxStyle = {
  border: '1px solid white',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  padding: '10px',
  maxWidth: '400px',
};

export default MainBox;
