import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import style from "./Fcst.module.css";
import xy from './getxy.json';

const FcstMain = () => {
    const [date, setDt] = useState();
    const dt = useRef();
    const code = useRef();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    useEffect(() => {// default Busan
        const selected = xy.filter((item) => item.행정구역코드 === 2600000000)[0];
        setArea(selected["1단계"]);
        setX(selected["격자 X"]);
        setY(selected["격자 Y"]);
    }, []);
    const ops = xy.map((item) => <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>);
    const today = new Date();
    const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24);
    const dby = new Date(yesterday.getTime() - 1000 * 60 * 60 * 24);
    const dtStrOps = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateOps = [
        <option value={today.toLocaleDateString()} key={today.toLocaleDateString()}>{today.toLocaleDateString(undefined, dtStrOps)}</option>,
        <option value={yesterday.toLocaleDateString()} key={yesterday.toLocaleDateString()}>{yesterday.toLocaleDateString(undefined, dtStrOps)}</option>,
        <option value={dby.toLocaleDateString()} key={dby.toLocaleDateString()}>{dby.toLocaleDateString(undefined, dtStrOps)}</option>
    ];
    const dateFormat = (date) => {
        const splitted = date.split('.').map((item) => item.trim());
        let formatted = splitted[0];
        formatted += (parseInt(splitted[1]) < 10 ? "0" : "") + splitted[1];
        formatted += (parseInt(splitted[2]) < 10 ? "0" : "") + splitted[2];
        return formatted;
    }
    const selArea = () => {
        const selected = xy.filter((item) => item.행정구역코드 === parseInt(code.current.value))[0];
        setArea(selected["1단계"]);
        setX(selected["격자 X"]);
        setY(selected["격자 Y"]);
    }
    return (
        <article>
            <header><h1>단기예보 선택</h1></header>
            <div className="grid">
                <select ref={dt} id="dt" name="dt" onChange={() => setDt(dateFormat(dt.current.value))}>
                    {dateOps}
                </select>
                <select id="area" name="area" ref={code} onChange={selArea}>
                    <option value=''>지역 선택</option>
                    {ops}
                </select>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultrasrt/${date}/${area}/${x}/${y}`} role="button" className={style.ultrasrt}>초단기예보</Link>
                    <Link to={`/vilage/${date}/${area}/${x}/${y}`} role="button" className={style.vilage}>단기예보</Link>
                </div>
            </footer>
        </article>
    )
}

export default FcstMain;