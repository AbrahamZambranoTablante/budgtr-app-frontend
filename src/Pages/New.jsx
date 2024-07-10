import NewTransactionForm from "../Components/NewTransactionForm";
import "./New.css"
export default function New () {
    return(
        <>
            <div className="form-container">
                <NewTransactionForm />
                <img className="benjamin" src="/benjamin.png" alt="benjamin franklin portrait" width="300" height="340"/>
            </div>
        </>
    );
};