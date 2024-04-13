import React from 'react';
import jsonData from './input.json';
import DocumentSection from './DocumentSection';

function App() {
  return (
    <div className="App">
      {jsonData.map((section, index) => (
        <DocumentSection key={index} data={section} />
      ))}
    </div>
  );
}

export default App;