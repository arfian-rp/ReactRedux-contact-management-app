import axios from "axios";

export const URL = `http://localhost:3000/contacts/`;
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: URL,
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.message,
          },
        });
      });
  };
};

export const addContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: URL,
      data,
    })
      .then((res) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.message,
          },
        });
      });
  };
};

export const deleteContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      url: `${URL}${data.id}`,
    })
      .then((res) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.message,
          },
        });
      });
  };
};

export const detailContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: `${URL}${data.id}`,
      data,
    })
      .then((res) => {
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.message,
          },
        });
      });
  };
};
