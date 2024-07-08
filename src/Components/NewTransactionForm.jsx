import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export default function NewTransactionForm () {

    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    const [newTransaction, setNewTransaction] = useState({
        id: nanoid(8),
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
            navigate(`/transactions/${newTransaction.id}`);
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
            <h1>Add Transaction</h1>
            <div className="form">
                <form className="" onSubmit={handleSubtmit}>
                    <label htmlFor="transactionName" className="">Transaction Name: </label><br/>
                    <input id="transactionName" type="text" className="input-field" value={newTransaction.transactionName} onChange={handleTextChange} required/><br/>
                    <label htmlFor="amount" >Amount: </label><br/>
                    <input id="amount" type="number" className="input-field" value={newTransaction.amount} onChange={handleTextChange} required/><br/>
                    <label htmlFor="date" className="">Date: </label><br/>
                    <input id="date" type="date" className="input-field" value={newTransaction.date} onChange={handleTextChange} required/><br/>
                    <label htmlFor="from" className="">From: </label><br/>
                    <input id="from" type="text" className="input-field" value={newTransaction.from} onChange={handleTextChange} required/><br/>
                    <label htmlFor="category" className="">Category: </label><br/>
                    <select id="category" className="input-field" onChange={handleTextChange} required>
                        <option></option>
                        <option value="Expense" >Expense</option>
                        <option value="Income" >Income</option>
                    </select><br/>
                    <input className="submit" type='submit' value="Submit"/>
                </form>
            </div>
        </>
    );
};