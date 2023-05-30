import { useRef } from "react";

const CntInput = ({val, setVal}) => {
    const value = useRef();

    const plus1 = (e) => {
        e.preventDefault();
        setVal(parseInt(value.current.value) + 1);
        value.current.value = val;
    }

    const minus1 = (e) => {
        e.preventDefault();
        if (val > 0)
            setVal(value.current.value - 1);
        value.current.value = val;
    }

    const txtchange = (value) => {
        setVal(value);
    }

    return (
        <article>
            <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={(e) => minus1(e)}>-</button></div>
                    <div><input type="text" id="txtinput" name="txtinput" ref={value} onChange={() => txtchange(value.current.value)} value={val} readOnly></input></div>
                    <div><button onClick={(e) => plus1(e)}>+</button></div>
                    <div></div>
                </div>
            </form>
        </article>
    )
}
export default CntInput;