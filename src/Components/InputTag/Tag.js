import React from 'react';

function Tag({onDeleteTag, value}) {
  var tag = (
    <div className='tag-container'>
      <span className='tag' onClick={(e) => onDeleteTag(e, value)}>
        &#x2716;{' '}
      </span>
      <p className='tag-value'>{value}</p>
    </div>
  );
  return <React.Fragment>{tag}</React.Fragment>;
}

export default Tag;
