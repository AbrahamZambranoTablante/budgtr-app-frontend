import "./Home.css"
import { Link } from "react-router-dom";
export default function Home () {
    return(
        <>
            <div className="home-container">
                <h1>Budgtr</h1>
                <p>"Master Your Money, Simplify Your Life"</p>
                <img src="/benjamin.png" alt="golden coin" width="300" height="300"/>
                <Link to={"/transactions"}>
                    <button>Start</button>
                </Link>
            </div>
        </>
    );
};