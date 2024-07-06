import { useState, useEffect } from "react";
import Transaction from "../Components/Transaction";
import { useNavigate } from "react-router-dom";

export default function Index () {

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

    console.log(transactions);

    return(
        <>
            <h1>Transactions:</h1>
            {transactions.map(trans => <Transaction key={trans.id} trans={trans} />)}
        </>
    );
};