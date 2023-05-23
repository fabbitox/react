import FcstTable from "./FcstTable";
import { useRef } from 'react';
import { useParams } from "react-router-dom";
import style from "./Fcst.module.css";
import code from './getcode.json';

const VilageFcst = () => {
    const area = useParams().area;
    const dt = useParams().dt;
    const cg = useRef();
    const options = code.filter((item) => item.예보구분 === "단기예보").map((item) => <option value={item.항목명} key={item.항목명}>{item.항목명}</option>);

    const displayDt = (dt) => {
        return dt.substr(0, 4) + '/' + dt.substr(4, 2) + '/' + dt.substr(6, 2);
    }

    return (
        <article>
            <header><div className="grid">
                <div>{area} 단기예보 ({displayDt(dt)})</div>
                <select id="category" name="category" ref={cg}>
                    <option value='' className={style.opt}>선택</option>
                    {options}
                </select>
            </div></header>
            <FcstTable />
        </article>
    )
}

export default VilageFcst;