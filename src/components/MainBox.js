import React, { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js'; // Import SKILL_LIST from consts.js

const statisticsBoxStyle = {
  border: '1px solid white',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  padding: '10px',
  maxWidth: '400px',
};

const MainBox = ({ children }) => {


  return (
    <div style={mainBoxContainerStyle}>
      <div style={mainBoxStyle}>
        <div style={mainBoxStyle}>
          {children}
        </div>
        <div style={verticalBoxContainerStyle}>
          <div style={verticalBoxStyle}>
            <h1>Attributes</h1>
            
          </div>
          <div style={verticalBoxStyle}>
            <h1>Classes</h1>
            
          </div>
          
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

const verticalBoxStyle = {
  border: '1px solid white',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  padding: '10px',
  maxWidth: '400px',
};

export default MainBox;
