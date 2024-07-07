import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css"
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
            <div className="container">
                <div className="links">
                    <Link to={`/`}><p className="font">Home</p></Link>
                    <Link to={`/transactions`}><p className="font">All transactions</p></Link>
                    <Link to={`/transactions/new`}><p className="font">New Transaction</p></Link>
                </div>
                <p className="font" style={{color: balanceColor(balance)}}>Balance: {balance.toFixed(2)}$</p>
            </div>
        </>
    );
};