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
    
    function formatDate ( unformattedDate ) {
        let formattedDate = unformattedDate.split("/");
        formattedDate.unshift(formattedDate.pop());
        return formattedDate.join("-");
      }

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setEditTransaction({...resJSON, date: formatDate(resJSON.date)}))
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
            navigate(`/transactions/${id}`)
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
            <h1>Edit Transaction:</h1>
            <div className="form">
                <form className="" onSubmit={handleSubtmit}>
                    <label htmlFor="transactionName" className="">Transaction Name: </label><br/>
                    <input id="transactionName" type="text" value={editTransaction.transactionName} onChange={handleTextChange} required/><br/>
                    <label htmlFor="amount" className="">Amount: </label><br/>
                    <input id="amount" type="number" value={editTransaction.amount} onChange={handleTextChange} required/><br/>
                    <label htmlFor="date" className="">Date: </label><br/>
                    <input id="date" type="date" value={editTransaction.date} onChange={handleTextChange} required/><br/>
                    <label htmlFor="from" className="">From: </label><br/>
                    <input id="from" type="text" value={editTransaction.from} onChange={handleTextChange} required/><br/>
                    <label htmlFor="category" className="">Category: </label><br/>
                    <select id="category" onChange={handleTextChange} required>
                        <option value="Expense" >Expense</option>
                        <option value="Income" >Income</option>
                    </select><br/>
                    <input className="submit" type='submit' value="Submit"/>
                </form>
            </div>
        </>
    );
};