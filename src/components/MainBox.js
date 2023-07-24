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
    
const handleIncrement = (attribute) => { // Increment Handler for Attribute List
    setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: prevAttributes[attribute] + 1,
    }));
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

              return (
                <div key={attribute} style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center' }}>
                  <p style={{ flex: 1 }}>
                    {attribute}: {attributeValue} 
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
