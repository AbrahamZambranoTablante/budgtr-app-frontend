import TransactionDetails from "../Components/TransactionDetails";
import "./Show.css"
export default function Show ({reformat}) {
    return(
        <>
            <div className="container-info">
                <h1>Transaction Details:</h1>
                <TransactionDetails />
            </div>
        </>
    );
};