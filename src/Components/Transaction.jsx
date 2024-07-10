import { Link } from "react-router-dom";
export default function Transaction ({trans}) {

    const { id, category, date, amount,transactionName } = trans;

    return(
        <>
            <div className="transaction-container">
                <Link to={`/transactions/${id}`}><p className="transaction-title">{transactionName}</p></Link>
                <p className="transaction-info">{date}</p>
                <p className="transaction-info">{category === "Expense" ? `-${amount}` : `+${amount}`}$</p>
            </div>
        </>
    );
};