import logo from "./logo.svg";
import "./App.css";
// import web3 library and ABI
import { Web3 } from "web3";
import ABI from "./abi.mjs";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("no message");

  // initialize the web3 library
  const web3 = new Web3(window.ethereum);

  // initialize the contract
  const myContract = new web3.eth.Contract(ABI, "0x2e6325985BC1Dbf46ff99a1D241942889B6E4f33");

  // call contract (get message)
  async function getMsg() {
    // call contract
    const currentMessage = await myContract.methods.getMessage().call();
    // render front end
    setMsg(currentMessage);
  }

  async function connectMetamask() {
    const accounts = await web3.eth.requestAccounts();
    return accounts[0];
  }

  async function updateMsg() {
    const account = await connectMetamask();
    const txReceipt = await myContract.methods.updateMessage("Hello CUEA 2").send({ from: account });
    console.log(txReceipt);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={connectMetamask}>Connect metamask</button>

        <button onClick={getMsg}>Get Message</button>
        <p>Message: {msg}</p>

        <button onClick={updateMsg}>Update Message</button>
      </header>
    </div>
  );
}

export default App;
