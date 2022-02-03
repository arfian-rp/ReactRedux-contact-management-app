import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, detailContact, getListContact } from "../../actions/ContactActions";

function ListContact(props) {
  const dispatch = useDispatch();
  const { deleteContactResult, getListContactResult, getListContactLoading, getListContactErrorMessage } = useSelector((state) => state.ContactReducer);

  function deleteHandl(id) {
    dispatch(deleteContact({ id }));
  }

  function editHandl(data) {
    dispatch(detailContact(data));
  }

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <div className="list-contact">
      <h2>Contact List</h2>
      {getListContactLoading ? (
        <span>Loading...</span>
      ) : getListContactErrorMessage ? (
        <span>{getListContactErrorMessage}</span>
      ) : getListContactResult && getListContactResult.length > 0 ? (
        getListContactResult.map((e) => (
          <div key={e.id} className="list">
            <h4>
              <button onClick={() => deleteHandl(e.id)}>Delete</button> <button onClick={() => editHandl(e)}>Edit</button> {e.name} - {e.number}
            </h4>
          </div>
        ))
      ) : (
        <span>Empty Contact</span>
      )}
    </div>
  );
}

export default ListContact;
