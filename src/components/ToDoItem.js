import React from 'react';

const ToDoItem = props => {
  const { id, assignment, completed, handleChange } = props;
  const identifier = `item-${id}`;

  const style = {
    color: completed ? '#aaadb3' : '#282c34',
  };

  const label = completed ? <del>{assignment}</del> : assignment;
  return (
    <div className='item'>
      <input
        key={id}
        type='checkbox'
        name={identifier}
        id={identifier}
        checked={completed}
        onChange={() => {
          handleChange(id);
        }}
      />
      <label style={style} htmlFor={identifier}>
        {label}
      </label>
    </div>
  );
};

export default ToDoItem;
