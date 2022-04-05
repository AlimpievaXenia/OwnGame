import { initState } from '../../InitState';

export const questionsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_QUESTIONS':
      return [...state, ...payload];
    default:
      return state;
  }
}
