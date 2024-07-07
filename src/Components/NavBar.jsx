import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function NavBar () {

    const navigate = useNavigate();

    const [transactions, setTransactions] = useState([]);

    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then(res => res.json())
        .then(resJSON => setTransactions(resJSON))
        .catch(() => {
            navigate("/not-found")
        });
    }, [navigate]);

    function balanceColor (balance) {
        let color = '';
        if (balance >= 1000) {
            color = 'green';
        } else if (balance < 1000 && balance >= 100) {
            color = 'yellow';
        } else if (balance < 100 && balance > 0) {
            color = 'orange';
        } else {
            color = 'red';
        }
        
        return color;
    }



    const incomeSum = transactions.filter(trans => trans.category === "Income").reduce((sum, {amount}) => sum + +amount, 0);
    const expenseSum = transactions.filter(trans => trans.category === "Expense").reduce((sum, {amount}) => sum - +amount, 0);
    const balance = incomeSum + expenseSum;

    return(
        <>
            <Link to={`/`}><button>Home</button></Link>
            <Link to={`/transactions`}><button>All transactions</button></Link>
            <Link to={`/transactions/new`}><button>New Transaction</button></Link>
            <p className="" style={{color: balanceColor(balance)}}>Balance: {balance.toFixed(2)}$</p>
        </>
    );
};