import React from 'react';

const Mention = ({ data }) => {
  const style = {
    backgroundColor: data.color,
    padding: '0.2em', // Small padding around mentions
    borderRadius: '0.2em', // Optional: if you want rounded corners
  };

  return (
    <span style={style} className="mention">
      {data.children.map((child, index) => (
        <React.Fragment key={index}>
          {child.text}
        </React.Fragment>
      ))}
    </span>
  );
};

export default Mention;