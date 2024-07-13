import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TransactionDetails ({reformat}) {  

    const navigate = useNavigate();
    const { id } = useParams();
    const [transaction, setTransaction] = useState({});
    const API = import.meta.env.VITE_API_URL;

    useEffect(() =>{
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setTransaction(resJSON))
        .catch(() =>{
            navigate("/not-found");
        })
    }, [id, navigate]);

    function deleteTransaction () {
        fetch(`${API}/transactions/${id}`, {
          method: "DELETE"
        })
          .then(() => {
            navigate("/transactions")
          })
      }

    const { transactionName, amount, date, from, category } = transaction;


    return(
        <>
          <div className="details-container">
            <p className="">Detail: {transactionName}</p>
            <p className="">From: {from}</p>
            <p className="">Amount: {category === "Expense" ? `-${amount}` : `+${amount}`}$</p>
            <p className="">Date: {date}</p>
            <p className="">Category: {category}</p>
            <p className="">Transaction ID: {id}</p>
            <Link to={`/transactions/${id}/edit`}><button>EDIT</button></Link>
            <button onClick={deleteTransaction}>DELETE</button>
          </div>
        </>
    );
};