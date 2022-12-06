const initialState = {
  user: {
    id_user: "",
    email_user: "",
    fullname_user: "",
    phone: "",
    photo: "",
    token: "",
  },
  isLoading: false,
};

const UserReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default UserReducer;
