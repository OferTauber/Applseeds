import { CHANGE_SEEARCHFIELD } from './constets';

export const setSearchField = (text) => ({
  type: CHANGE_SEEARCHFIELD,
  payload: text,
});
