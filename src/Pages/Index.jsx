import { useState, useEffect } from "react";
import Transaction from "../Components/Transaction";
import { useNavigate } from "react-router-dom";
import "./Index.css"

export default function Index ({incomeSum, expenseSum}) {

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

    return(
        <>
            <div className="whole-container">
                <div className="summary-container">
                    <h2 className="">Total Income: {incomeSum.toFixed(2)}$</h2>
                    <h2 className="">Total Expense: {expenseSum.toFixed(2)}$</h2>
                </div>
                <div className="transactions-list">
                    <h1>Transactions:</h1>
                    <div className="list-container">
                        {transactions.map(trans => <Transaction key={trans.id} trans={trans} />)}
                    </div>
                </div>
            </div>
        </>
    );
};