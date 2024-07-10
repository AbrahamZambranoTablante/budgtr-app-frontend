import TransactionDetails from "../Components/TransactionDetails";
import "./Show.css"
export default function Show ({reformat}) {
    return(
        <>
            <div className="container-info">
                <h1>Transaction Details:</h1>
                <TransactionDetails reformat={reformat} />
                {/* <img className="benjamin" src="/benjamin.png" alt="benjamin franklin portrait" width="300" height="340"/> */}
            </div>
        </>
    );
};