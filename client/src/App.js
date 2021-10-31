import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Bankify from "./components/App";
import { useState } from "react";
import BankContext from "./context"

export default function App() {
  const [user, setUser] = useState("");
  // settings for alert
  const [msg, setMsg] = useState("hi");
  const [heading, setHeading] = useState("");
  const [type, setType] = useState("danger");

  const createAlert = (message,variant,title)=>{
    setMsg(message);
    setType(variant);
    setHeading(title);
  }

  const resetAlert = ()=>{
    setMsg('');
    setType('danger');
    setHeading('');
  }
  const alertProps = {msg,type,heading,reset:resetAlert};

  return (
    <div className="App">
      <BankContext.Provider value={{ user, setUser, createAlert, alertProps}}>
        <Bankify/>
      </BankContext.Provider>
    </div>
  );
}
