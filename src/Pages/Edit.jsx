import EditTransaction from "../Components/EditTransaction";
import "./New.css"
export default function Edit () {
    return(
        <>
           <div className="form-container">
                <EditTransaction />
                <img className="benjamin" src="/benjamin.png" alt="benjamin franklin portrait" width="300" height="340"/>
            </div>
        </>
    );
};