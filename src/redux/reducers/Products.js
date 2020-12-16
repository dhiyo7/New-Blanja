import { combineReducers } from "redux";

const initialProductState = {
  allProduct: [],
  myProduct: [],
};

const productReducer = combineReducers({
  // key => nama Reducer
  // value => fungsi Reducer
  product: (state = initialProductState, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCT":
        return {
          ...state,
          allProduct: action.payload.allProduct,
        };
      case "GET_MY_PRODUCT":
        return {
          ...state,
          myProduct: action.payload.myProduct,
        };
      default:
        return {
          ...state,
        };
    }
  },
});

export default productReducer;
