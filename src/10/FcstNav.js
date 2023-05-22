import { Link } from "react-router-dom";
import "./Fcst.module.css";

const FcstNav = () => {
    return (
        <nav>
            <ul>기상청 단기예보</ul>
            <ul>
                <li><Link to='/' role="button">단기예보 메인</Link></li>
            </ul>
        </nav>
    )
}

export default FcstNav;