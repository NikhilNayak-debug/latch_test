import React from 'react';
import Clause from './Clause';
import Mention from './Mention';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

const DocumentSection = ({ data }) => {
  const renderContent = (item, parentMarks) => {
    if (!item) {
      return null;
    }

    const marks = { ...parentMarks, ...(item.bold && { bold: item.bold }), ...(item.underline && { underline: item.underline }) };

    const style = {
      fontWeight: marks.bold ? 'bold' : 'normal',
      textDecoration: marks.underline ? 'underline' : 'none',
      backgroundColor: item.color || 'transparent'
    };

    if (item.type === 'mention') {
      return <Mention data={item} />;
    } else if (item.type === 'clause') {
      return <Clause data={item} />;
    } else if (item.text) {
      return <span style={style}>{renderTextWithLineBreaks(item.text)}</span>;
    } else if (item.children) {
      return item.children.map((child, index) => (
        <React.Fragment key={index}>{renderContent(child, marks)}</React.Fragment>
      ));
    }
    return null;
  };

  return (
    <div className="document-section">
      {data && data.children && data.children.map((child, index) => (
        <React.Fragment key={index}>{renderContent(child, {})}</React.Fragment>
      ))}
    </div>
  );
};

export default DocumentSection;