import { authActionTypes } from "./types";
import { initialState } from './state';

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP_WITHOUT_PASSWORD_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload
        }
      };

    case authActionTypes.SIGN_UP_WITHOUT_PASSWORD_REQUEST:
      return state;

    case authActionTypes.SIGN_UP_WITHOUT_PASSWORD_FAILURE:
      return {
        ...state,
        data: {
          ...action.error
        }
      };
    default:
      return state;
  }
};

export default authReducer