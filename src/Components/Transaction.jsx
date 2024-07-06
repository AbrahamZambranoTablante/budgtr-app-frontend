import { Link } from "react-router-dom";
export default function Transaction ({trans}) {

    const { id, category, date, amount } = trans;

    return(
        <>
            <Link to={`/transactions/${id}`}><p className="">{category}</p></Link>
            <p className="">{date}</p>
            <p className="">${amount}</p><hr/>
        </>
    );
};