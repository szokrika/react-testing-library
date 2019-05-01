import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React Testing Library</h1>
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
