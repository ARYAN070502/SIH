// src/components/TextContent.js

import React from 'react';

const textStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0', // Background color for the text content
};

function TextContent() {
  return (
    <div style={textStyle}>
      <h2>Centered Text</h2>
      <p>
        This is some centered text content below the image slider. You can
        add any text or content you want here.
      </p>
    </div>
  );
}

export default TextContent;
