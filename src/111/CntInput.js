import { useRecoilState } from "recoil";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
    const [n, setN] = useRecoilState(CntAtoms);
    const value = useRef();

    const plus1 = (e) => {
        e.preventDefault();
        setN(parseInt(value.current.value) + 1);
        value.current.value = n;
    }

    const minus1 = (e) => {
        e.preventDefault();
        if (n > 0)
            setN(value.current.value - 1);
        value.current.value = n;
    }

    const txtchange = (value) => {
        setN(value);
    }

    return (
        <article>
            <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={(e) => minus1(e)}>-</button></div>
                    <div><input type="text" id="txtinput" name="txtinput" ref={value} onChange={() => txtchange(value.current.value)} value={n} readOnly></input></div>
                    <div><button onClick={(e) => plus1(e)}>+</button></div>
                    <div></div>
                </div>
            </form>
            <footer>
            <ul>
                <li><Link to='/display'>Display</Link></li>
            </ul>
            </footer>
        </article>
    )
}
export default CntInput;