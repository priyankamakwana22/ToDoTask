import {ADD_NOTE} from './Action';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  console.log("🚀 ~ reducer ~ action:", action)
  switch (action.type) {
    case ADD_NOTE:
      return {...state, tasks:[ ...state.tasks , action.payload]};
    default:
      return state;
  }
};

export default reducer;
