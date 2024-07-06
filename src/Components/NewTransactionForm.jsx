import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTransactionForm () {

    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    const [newTransaction, setNewTransaction] = useState({
        transactionName: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    function handleTextChange (e) {
        setNewTransaction({...newTransaction, [e.target.id]: e.target.value});
    }

    function createTransaction () {
        fetch(`${API}/transactions`, {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate('/transactions')
        })
        .catch(error => console.error(error));
    };

    function handleSubtmit (e) {
        e.preventDefault();
        createTransaction();
        setNewTransaction({
            transactionName: "",
            amount: 0,
            date: "",
            from: "",
            category: ""
        });
    };

    return(
        <>
            Add A New Transaction
            <form className="" onSubmit={handleSubtmit}>
                <label htmlFor="transactionName" className="">Transaction Name: </label>
                <input id="transactionName" type="text" value={newTransaction.transactionName} onChange={handleTextChange} required/>
                <label htmlFor="amount" className="">Amount: </label>
                <input id="amount" type="number" value={newTransaction.amount} onChange={handleTextChange} required/>
                <label htmlFor="date" className="">Date: </label>
                <input id="date" type="text" value={newTransaction.date} onChange={handleTextChange} required/>
                <label htmlFor="from" className="">From: </label>
                <input id="from" type="text" value={newTransaction.from} onChange={handleTextChange} required/>
                <label htmlFor="category" className="">Category: </label>
                <select id="category" onChange={handleTextChange} required>
                    <option value="Expense" >Expense</option>
                    <option value="Income" >Income</option>
                </select>
                <input type='submit' value="submit"/>
            </form>
        </>
    );
};