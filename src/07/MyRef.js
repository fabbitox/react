import { useState, useRef } from "react";
import './MyRef.module.css';

const MyRef = () => {
    let cntcom = 1;
    const [cntst, setCntst] = useState(1);
    const cntref = useRef(1);
    const showCnt = () => {
        console.log('cnt1 =', cntcom, 'cnt3 =', cntref.current);
    }
    const showCntcom = () => {
        cntcom++;
        showCnt();
    }
    const showCntst = () => {
        setCntst(cntst + 1);
    }
    const showCntref = () => {
        cntref.current = cntref.current + 1;
        showCnt();
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <h1>component 변수: {cntcom}</h1>
                        <h1>state 변수: {cntst}</h1>
                        <h1>ref 변수: {cntref.current}</h1>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCntcom()}>component 변수</button>
                    <button onClick={() => showCntst()}>state 변수</button>
                    <button onClick={() => showCntref()}>ref 변수</button>
                </div>
            </article>
        </main>
    );
}

export default MyRef;