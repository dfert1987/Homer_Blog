import React from 'react';

function Tag({onDeleteTag, value, color}) {
  var tag = (
    <div>
      <span onClick={(e) => onDeleteTag(e, value)}>&#x2716; </span>
      {value}
    </div>
  );
  return <React.Fragment>{tag}</React.Fragment>;
}

export default Tag;
