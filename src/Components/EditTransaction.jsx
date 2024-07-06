import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTransaction () {

    const { id } = useParams();
    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    const [editTransaction, setEditTransaction] = useState({
        transactionName: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setEditTransaction(resJSON))
        .catch(() => {
            navigate('/not-found')
        })
    }, [])

    function handleTextChange (e) {
        setEditTransaction({...editTransaction, [e.target.id]: e.target.value});
    }

    function updateTransaction () {
        fetch(`${API}/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify(editTransaction),
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
        updateTransaction();
        setEditTransaction({
            transactionName: "",
            amount: 0,
            date: "",
            from: "",
            category: ""
        });
    };

    return(
        <>
            Edit Transaction:
            <form className="" onSubmit={handleSubtmit}>
                <label htmlFor="transactionName" className="">Transaction Name: </label>
                <input id="transactionName" type="text" value={editTransaction.transactionName} onChange={handleTextChange} required/>
                <label htmlFor="amount" className="">Amount: </label>
                <input id="amount" type="number" value={editTransaction.amount} onChange={handleTextChange} required/>
                <label htmlFor="date" className="">Date: </label>
                <input id="date" type="date" value={editTransaction.date} onChange={handleTextChange} required/>
                <label htmlFor="from" className="">From: </label>
                <input id="from" type="text" value={editTransaction.from} onChange={handleTextChange} required/>
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