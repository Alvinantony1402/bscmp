import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Admin from '../src/components/admin';
import { Router,Routes, Route, Navigate } from "react-router-dom";


import React, { Component } from 'react';

const DONOR = process.env.REACT_APP_DONOR_ADDR;
const HOSPITAL = process.env.REACT_APP_HOSPITAL_ADDR;
const ADMIN = process.env.REACT_APP_ADMIN_ADDRS;
const BANK = process.env.REACT_APP_BANK_ADDR;


function App() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div className="App">
      <Appbar walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
      <Routes>
      <Route exact path="/admin-dashboard" element={walletAddress === ADMIN ? (<Admin/>) : (<Navigate to={"/login"} replace />)}>
      </Route>

      <Route exact path="/bank-dashboard"
      element={
        walletAddress === BANK.split(" ")[0] ||
        walletAddress === BANK.split(" ")[1] ||
        walletAddress === BANK.split(" ")[2] ? (<Bank />) : 
        (
          <Navigate to={"/login"} replace />
        )
      }
          > </Route>
          <Route exact path="/hospital-dashboard"
      element={
        walletAddress === HOSPITAL.split(" ")[0] ||
        walletAddress === HOSPITAL.split(" ")[1] ||
        walletAddress === HOSPITAL.split(" ")[2] ? (
          <Hospital/>
        ) : (
          <Navigate to={"/login"} replace />
        )
      } > </Route>
       <Route exact path="/donor-dashboard"
      element={
        walletAddress === DONOR.split(" ")[0] ||
        walletAddress === DONOR.split(" ")[1] ||
        walletAddress === DONOR.split(" ")[2] ? (
          <Donor/>
        ) : (
          <Navigate to={"/login"} replace />
        )
      } > </Route>
      </Routes>
    </div>
  );
}

export default App;
