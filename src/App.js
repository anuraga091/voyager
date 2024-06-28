import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './components/transactions';
import TransactionDetails from './components/transactionDetails';


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/transaction/:id" element={<TransactionDetails />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
