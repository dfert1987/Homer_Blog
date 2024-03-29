import React from 'react';
import TagList from './TagList';
import './Tag.css';

function InputTag({defaultTags, onAddTag, onDeleteTag, placeHolder}) {
  const onKeyUp = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      let input = e.target.value.trim().split(',');
      if (input.length === 0 || input[0] === '') return;
      onAddTag(input);
      e.target.value = '';
    }
  };

  const _onDeleteTag = (tag) => {
    onDeleteTag(tag);
  };

  return (
    <div>
      <TagList tags={defaultTags} onDeleteTag={_onDeleteTag} />
      <input
        onKeyUp={(e) => onKeyUp(e)}
        type='text'
        placeholder='Enter tags separated by comma'
        className='tag input'
      />
    </div>
  );
}

export default InputTag;
