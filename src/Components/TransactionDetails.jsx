import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TransactionDetails () {  

    const navigate = useNavigate();
    const { id } = useParams();
    const [transaction, setTransaction] = useState({});
    const API = import.meta.env.VITE_API_URL;

    useEffect(() =>{
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setTransaction(resJSON))
        .catch(() =>{
            navigate("/unsuccessfull-fetch");
        })
    }, [id, navigate]);

    const { transactionName, amount, date, from, category } = transaction;

    return(
        <>
            <p className="">PURCHASE: {transactionName}</p>
            <p className="">FROM: {from}</p>
            <p className="">AMOUNT: ${amount}</p>
            <p className="">DATE: {date}</p>
            <p className="">CATEGORY: {category}</p>
            <p className="">ID: {id}</p>
        </>
    );
};