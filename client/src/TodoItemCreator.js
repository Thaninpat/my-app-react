import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
const todoListState = atom({
  key: 'todoListState',
  default: [],
});
function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const srtTodoList = useSetRecoilState(todoListState);
  const addItem = () => {
    srtTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
