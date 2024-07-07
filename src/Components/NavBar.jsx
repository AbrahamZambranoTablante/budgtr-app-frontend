import { Link } from "react-router-dom";
export default function NavBar () {
    return(
        <>
            <Link to={`/`}><button>Home</button></Link>
            <Link to={`/transactions`}><button>All transactions</button></Link>
            <Link to={`/transactions/new`}><button>New Transaction</button></Link>
        </>
    );
};