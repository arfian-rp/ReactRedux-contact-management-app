import { ADD_CONTACT, DELETE_CONTACT, DETAIL_CONTACT, GET_LIST_CONTACT, UPDATE_CONTACT } from "../../actions/ContactActions";

const initialState = {
  getListContactLoading: false,
  getListContactResult: false,
  getListContactErrorMessage: false,

  addContactLoading: false,
  addContactResult: false,
  addContactErrorMessage: false,

  deleteContactLoading: false,
  deleteContactResult: false,
  deleteContactErrorMessage: false,

  detailContactResult: false,

  updateContactLoading: false,
  updateContactResult: false,
  updateContactErrorMessage: false,
};

const Contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactLoading: action.payload.loading,
        getListContactResult: action.payload.data,
        getListContactErrorMessage: action.payload.errorMessage,
      };

    case ADD_CONTACT:
      return {
        ...state,
        addContactLoading: action.payload.loading,
        addContactResult: action.payload.data,
        addContactErrorMessage: action.payload.errorMessage,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactLoading: action.payload.loading,
        deleteContactResult: action.payload.data,
        deleteContactErrorMessage: action.payload.errorMessage,
      };

    case DETAIL_CONTACT:
      return {
        ...state,
        detailContactResult: action.payload.data,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        updateContactLoading: action.payload.loading,
        updateContactResult: action.payload.data,
        updateContactErrorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Contact;
