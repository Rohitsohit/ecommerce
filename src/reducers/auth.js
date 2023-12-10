import { AUTH, LOGOUT} from "../constant/index";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile-shoper", JSON.stringify({ ...action }));
      return { ...state, authData: action };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
