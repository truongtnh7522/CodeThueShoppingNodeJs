export const productDetailsState = {
  loading: false,
  menu: ['mo_ta','specs', 'faq'] // Defaulting to "Mô tả" tab
};

export const productDetailsReducer = (state, action) => {
  switch (action.type) {
    case "menu":
      return {
        ...state,
        menu: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "cartState":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
