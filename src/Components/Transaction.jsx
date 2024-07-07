import { Link } from "react-router-dom";
export default function Transaction ({trans}) {

    const { id, category, date, amount,transactionName } = trans;

    return(
        <>
            <Link to={`/transactions/${id}`}><p className="">{transactionName}</p></Link>
            <p className="">{date}</p>
            <p className="">{category === "Expense" ? `-${amount}` : `+${amount}`}$</p><hr/>
        </>
    );
};