import NewTransactionForm from "../Components/NewTransactionForm";
import "./New.css"
export default function New ({setTransactions, reformat}) {
    return(
        <>
            <div className="form-container">
                <NewTransactionForm />
            </div>
        </>
    );
};