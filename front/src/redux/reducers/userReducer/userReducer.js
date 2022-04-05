import { initState } from '../../InitState';

export const userReducer = (state = initState, action) => {
  // console.log(state.user.totalScore, '11111')
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER':
      return { ...state, ...payload };
    case 'UPDATE_SCORE':
      const totalScore = payload.isCorrect ?
        state.totalScore + payload.points
        : state.totalScore - payload.points;
      return { ...state, totalScore };
    case 'LOGOUT':
      return {
        ...state,
        name: null,
        email: null,
        password: null,
        totalScore: null
      };
    default:
      return state;
  }
}
