import "./App.scss";
import React from "react";
import { FormContact, Header, ListContact } from "./components";

function App(props) {
  return (
    <div className="app">
      <Header />
      <hr />
      <FormContact />
      <hr />
      <ListContact />
    </div>
  );
}

export default App;
