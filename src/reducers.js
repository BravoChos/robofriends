import { CHANGE_SEARCHFIELD } from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
      // return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
