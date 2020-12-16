import { combineReducers } from "redux";


const initialState = {
  isLogin : localStorage.getItem('token') != null,
  token : localStorage.getItem('token'),
  username : localStorage.getItem('username'),
}

const initialProductState = {
  allProducts: [],
  myProducts: [],
};

const reducers = combineReducers({
  // key => nama Reducer
  // value => fungsi Reducer

  product: (state = initialProductState, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCT":
        return {
          ...state,
          allProduct: action.payload.allProducts,
        };
      case "GET_MY_PRODUCT":
        return {
          ...state,
          myProduct: action.payload.myProducts,
        };
      default:
        return {
          ...state,
        };
    }
  },

  auth: (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLogin: true,
          username: action.payload.username,
          token: action.payload.username
        };
      case "LOGOUT":
        return {
          ...state,
          isLogin: false,
          username: null
        };
      default:
        return {
          ...state,
        };
    }
  },
});

export default reducers;
