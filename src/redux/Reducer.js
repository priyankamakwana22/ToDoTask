import {ADD_NOTE} from './Action';

const initialState = {
  todoData: [],
};

const reducer = (state = initialState, action) => {
  console.log("🚀 ~ reducer ~ action:", action.type)
  console.log('🚀 ~ reducer ~ state:', state);
  switch (action.type) {
    case ADD_NOTE:
      return {...state, todoData: action.payload};
    default:
      return state;
  }
};

export default reducer;
