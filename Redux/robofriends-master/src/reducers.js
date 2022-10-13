import { CHANGE_SEEARCHFIELD } from './constets';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
