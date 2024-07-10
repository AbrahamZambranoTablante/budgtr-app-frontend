import { Link } from "react-router-dom";
import "./NavBar.css"
export default function NavBar ({balance}) {

    function balanceColor (balance) {
        let color = '';
        if (balance >= 1000) {
            color = 'green';
        } else if (balance < 1000 && balance >= 100) {
            color = 'yellow';
        } else if (balance < 100 && balance > 0) {
            color = 'orange';
        } else {
            color = 'red';
        }
        return color;
    }

    return(
        <>
            <div className="container">
                <div className="links">
                    <Link to={`/`}><p className="logo">Budgetmin</p></Link>
                    <Link to={`/transactions`}><p className="font">All transactions</p></Link>
                    <Link to={`/transactions/new`}><p className="font">New Transaction</p></Link>
                </div>
                <p className="font" style={{color: balanceColor(balance)}}>Balance: {balance.toFixed(2)}$</p>
            </div>
        </>
    );
};