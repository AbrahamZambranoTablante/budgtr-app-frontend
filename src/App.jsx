import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";
import NavBar from './Components/NavBar';
import { useState, useEffect } from "react";


function App() {

    const [transactions, setTransactions] = useState([]);

    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then(res => res.json())
        .then(resJSON => setTransactions(resJSON))
        .catch((error) => {
            console.error(error);
        });
    }, [transactions]);

  const incomeSum = transactions.filter(trans => trans.category === "Income").reduce((sum, {amount}) => sum + +amount, 0);
  const expenseSum = transactions.filter(trans => trans.category === "Expense").reduce((sum, {amount}) => sum - +amount, 0);
  const balance = incomeSum + expenseSum;

  return (
    <>
      <Router>
        <NavBar balance={balance}/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/transactions' element={ <Index incomeSum={incomeSum} expenseSum={expenseSum} /> } />
          <Route path='/transactions/:id' element={ <Show /> } />
          <Route path='/transactions/:id/edit' element={ <Edit /> } />
          <Route path='/transactions/new' element={ <New /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
