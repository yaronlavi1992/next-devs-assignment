import * as types from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: false,
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    case types.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
