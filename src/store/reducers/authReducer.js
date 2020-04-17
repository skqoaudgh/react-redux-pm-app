const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
