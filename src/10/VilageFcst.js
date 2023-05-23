import FcstTable from "./FcstTable";
import { useRef, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import style from "./Fcst.module.css";
import code from './getcode.json';

const VilageFcst = () => {
    const area = useParams().area;
    const dt = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const cg = useRef();
    const options = code.filter((item) => item.예보구분 === "단기예보").map((item) => <option value={item.항목명} key={item.항목명}>{item.항목명}</option>);
    const [fcst, setFcst] = useState();

    const displayDt = (dt) => {
        return dt.substr(0, 4) + '/' + dt.substr(4, 2) + '/' + dt.substr(6, 2);
    }

    useEffect(() => {
        let time = '0500';
        let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=lRsZfmJLjf7hvQqhA568pBWCTmyVfaTgEjP%2Bk9pXXrXNfh0DVuCIQ4NP4yt25SkXeLkQCUlA1K7tUpEnZxHtmQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&";
        url += `base_date=${dt}&base_time=${time}&nx=${x}&ny=${y}`;
        fetch(url).then((resp) => resp.json()).then((data) => setFcst(data.response.body.items.item))
        .catch((err) => console.log(err));
    }, [dt, setFcst, x, y]);

    return (
        <article>
            <header><div className="grid">
                <div>{area} 단기예보 ({displayDt(dt)})</div>
                <select id="category" name="category" ref={cg}>
                    <option value='' className={style.opt}>선택</option>
                    {options}
                </select>
            </div></header>
            <FcstTable fcst={fcst} />
        </article>
    )
}

export default VilageFcst;