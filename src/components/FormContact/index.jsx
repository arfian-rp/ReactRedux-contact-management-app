import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContact, getListContact, updateContact } from "../../actions/ContactActions";

function FormContact(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const refName = useRef(null);
  const { updateContactResult, addContactResult, detailContactResult } = useSelector((state) => state.ContactReducer);

  function submitHandl(e) {
    e.preventDefault();
    refName.current.focus();
    if (id) {
      dispatch(updateContact({ id, name, number }));
      return setId("");
    }
    dispatch(addContact({ name, number }));
  }

  function cancelEditHandl() {
    setName("");
    setNumber("");
    setId("");
  }

  useEffect(() => {
    if (addContactResult) {
      dispatch(getListContact());
      setName("");
      setNumber("");
    }
  }, [addContactResult, dispatch]);

  useEffect(() => {
    if (updateContactResult) {
      dispatch(getListContact());
      setName("");
      setNumber("");
      setId("");
    }
  }, [updateContactResult, dispatch]);

  useEffect(() => {
    if (detailContactResult) {
      setName(detailContactResult.name);
      setNumber(detailContactResult.number);
      setId(detailContactResult.id);
      refName.current.focus();
    }
  }, [detailContactResult, dispatch]);

  return (
    <div className="form-contact">
      {id ? (
        <h2>
          Edit Contact <button onClick={cancelEditHandl}>Cancel Edit</button>
        </h2>
      ) : (
        <h2>Add Contact</h2>
      )}
      <form className="form" onSubmit={submitHandl}>
        <div className="pack">
          <div className="input">
            <input ref={refName} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" autoFocus />
          </div>
        </div>
        <div className="pack">
          <div className="input">
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
          </div>
        </div>
        <div className="pack">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
