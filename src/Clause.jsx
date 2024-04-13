import React from 'react';
import Mention from './Mention';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

const Clause = ({ data }) => {
  const renderContent = (item) => {
    const style = {
      fontWeight: item.bold ? 'bold' : 'normal',
      textDecoration: item.underline ? 'underline' : 'none',
      backgroundColor: item.color || 'transparent'
    };

    if (item.type === 'mention') {
      return <Mention data={item} />;
    } else if (item.children) {
      return item.children.map((child, index) => (
        <React.Fragment key={index}>
          {renderContent(child)}
        </React.Fragment>
      ));
    } else if (item.text) {
      return <span style={style}>{renderTextWithLineBreaks(item.text)}</span>;
    }
  };

  return (
    <ol className="clause-list">
      <li>
        <div>
          {data.title && <h4>{data.title}</h4>}
          {data.children.map((child, index) => renderContent(child, index))}
        </div>
      </li>
    </ol>
  );
};

export default Clause;