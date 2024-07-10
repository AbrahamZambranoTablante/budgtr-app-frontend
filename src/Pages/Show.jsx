import TransactionDetails from "../Components/TransactionDetails";
import "./Show.css"
export default function Show () {
    return(
        <>
            <div className="container-info">
                <h1>Transaction Details:</h1>
                <TransactionDetails />
                {/* <img className="benjamin" src="/benjamin.png" alt="benjamin franklin portrait" width="300" height="340"/> */}
            </div>
        </>
    );
};