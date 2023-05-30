import { Link } from "react-router-dom";
import { CntAtoms } from "./CntAtoms";
import { CntTwice } from "./CntAtoms";
import { useRecoilValue } from "recoil";

const CntDisplay = () => {
    const n = useRecoilValue(CntAtoms);
    const n2 = useRecoilValue(CntTwice);

    return (
        <article>
            <h1>입력값: {n}, 입력값 2배: {n2}</h1>
            <footer>
                <ul>
                    <li><Link to='/input'>Input</Link></li>
                </ul>
            </footer>
        </article>
    )
}
export default CntDisplay;