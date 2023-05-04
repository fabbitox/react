import { useState } from "react";
import './MyRef.module.css';

const MyRef = () => {
    let cnt1 = 1;
    const [cnt2, setCnt2] = useState(1);
    const showCnt = () => {
        console.log('cnt1 = ', cnt1)
    }
    const showCnt1 = () => {
        cnt1++;
        showCnt();
    }
    const showCnt2 = () => {
        setCnt2(cnt2 + 1);
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <h1>component 변수: {cnt1}</h1>
                        <h1>state 변수: {cnt2}</h1>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>component 변수</button>
                    <button onClick={() => showCnt2()}>state 변수</button>
                </div>
            </article>
        </main>
    );
}

export default MyRef;