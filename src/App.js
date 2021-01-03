import "./App.css";
import { useState } from "react";
import Primarybtn from "./Primarybtn.js";
import MainInput from "./MainInput";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <MainInput setName={setName} />
      <br />
      {name}
      {name === "Go" ? (
        <Primarybtn fullname="go" />
      ) : (
        <Primarybtn fullname="Submit" />
      )}
    </div>
  );
};

export default App;
