export const ADD_NOTE = 'ADD_NOTE';
export const SET_NOTE_ID = 'SET_NOTE_ID';

export const addTodo = todoData => ({
  type: 'ADD_NOTE',
  payload: todoData,
});
