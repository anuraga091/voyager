import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './components/transactions';


function App() {


  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<Transactions />} />
          {/* <Route path="/transaction/:id" element={<TransactionDetails />} /> */}
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
