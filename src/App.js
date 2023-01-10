import './App.css';
import verifiableCredential from './verifiable-credential.json';
import sha256 from 'js-sha256';
import Web3 from 'web3';
import { SIMPLE_STORAGE_ADDRESS, SIMPLE_STORAGE_ABI } from './config';

function App() {
  //generate hash from verifiable-credential.json
  const hash = '0x' + sha256(JSON.stringify(verifiableCredential));
  console.log("hash", hash);

  //save hash to the set function in simplestorage contract
  async function saveHash() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const account = await window.ethereum.request({method: 'eth_requestAccounts'});
    //create an instace of the smart contract
    const simpleStorage = new web3.eth.Contract(SIMPLE_STORAGE_ABI, SIMPLE_STORAGE_ADDRESS);
    await simpleStorage.methods.set(hash).send({from: account[0]});
    console.log("Hash saved to the contract");
  }

 //get hash from the get function in simplestorage contract
  async function getHash() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    //const accounts = await web3.eth.getAccounts();
    const simpleStorage = new web3.eth.Contract(SIMPLE_STORAGE_ABI, SIMPLE_STORAGE_ADDRESS);
    const hash = await simpleStorage.methods.get().call();
    console.log("Hash from the contract: " + hash);
  }


  return (
    <div>
      <label htmlFor="file input">Submit your file here</label>
      <input type="file"/>
      <div>
        <button  onClick={saveHash}>Store hash</button>
        <button onClick={getHash}>Get hash</button>
      </div>
    </div>
  );
}

export default App;
