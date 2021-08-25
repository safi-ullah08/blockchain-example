import React, { useEffect, useState } from 'react';
import './App.css';
import {Card,Button} from "react-bootstrap";

import Web3 from 'web3'
import voteContractABI from '../contracts/abis/voteContractABI';
import {voteContractAddress} from '../contracts/contractAddress/contractAddress'

function App() {


  const  [account, setAccount] = useState(null);
  const  [vote, setVote] = useState(null);
  const  [canidate_1,setCanidate1] = useState(0);
  const  [canidate_2,setCanidate2] = useState(0);



   const loadWeb3 = async ()=>{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const web3 = window.web3;

    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

   const loadBlockchainData = async ()=> {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
  }


    useEffect( ()=>{
       loadWeb3()
       loadBlockchainData();
    },[])


    async function voteForCanidate1() {      
      
    }
    
    
    async function voteForCanidate2(){
     
    }

    return (
      <div>
       <Card style={{ width: '18rem',margin:'auto', marginTop:'5em' }}>
        <Card.Body>
          <Card.Title>Ballot</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Vote for Altaf Hussain: {canidate_1} <br/>  Vote for Osama Bin Laden: {canidate_2}</Card.Subtitle>    
          <div style={{padding:"2em"}}>
            <Button style={{margin:'2em'}} onClick={()=>voteForCanidate1()}>Altaf Hussain</Button>
            <Button style={{margin:'2em'}} onClick={()=>voteForCanidate2()}>Osama Bin Laden</Button>
          
          </div>

        </Card.Body>

      </Card>

      </div>
    );
  }

export default App;
