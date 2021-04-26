const initialState = {
    isAdmin: localStorage.getItem('isAdmin') || 'false',
    isLogin: localStorage.getItem('isLogin') || 'false',
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_IS_ADMIN': {
        localStorage.setItem('isAdmin', action.payload.isAdmin);
        return {
          ...state,
          isAdmin: action.payload.isAdmin,
        };
      }
      case 'UPDATE_IS_LOGIN': {
        localStorage.setItem('isLogin', action.payload.isLogin);
        return {
          ...state,
          isLogin: action.payload.isLogin,
        };
      }
    }
    return state;
  };
  export default reducer;
  