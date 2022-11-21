export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  LOG_IN_STATUS: "USER_LOG_IN",
  LOG_OUT_STATUS: "USER_LOG_OUT",
};
const InitiaState = {
  currentuser: {},
};
export const userReducer = (state = InitiaState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentuser: payload };
    case USER_ACTION_TYPE.LOG_OUT_STATUS:
      return { ...state, currentuser: payload };
    default:
      return state;
  }
};
