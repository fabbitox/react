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
    const options = code.filter((item) => item.예보구분 === "단기예보").map((item) => <option value={item.항목값 + " " + item.단위} key={item.항목명}>{item.항목명}</option>);
    const [fcst, setFcst] = useState();
    const [category, setCg] = useState();
    const [unit, setUnit] = useState();

    const displayDt = (dt) => {
        return dt.substr(0, 4) + '/' + dt.substr(4, 2) + '/' + dt.substr(6, 2);
    }

    const isToday = (dt) => {
        let date = new Date().getDate();
        date = (date < 10 ? "0" : "") + date;
        if (date === dt.substr(6, 2))
            return true;
        return false;
    }

    const changeCt = () => {
        const value = cg.current.value.split(" ");
        setCg(value[0]);
        if (value[1].startsWith("범주"))
            setUnit('');
        else
            setUnit(value[1]);
    }

    useEffect(() => {
        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let offset;
        if (isToday(dt)) {
            offset = 1000 * 60 * minute * -1;
            offset -= ((hour % 3) + 1) * 60 * 60 * 1000;
            if (minute < 10) {
                offset -= 1000 * 60 * 60;
            }
        } else {
            offset = 1000 * 60 * minute * -1;
            hour += 1;
            offset -= ((hour % 3) - 3) * 60 * 60 * 1000;
        }
        const dateNew = new Date(date.getTime() + offset);
        hour = dateNew.getHours();
        minute = dateNew.getMinutes();
        const time = (hour < 10 ? "0" : "") + hour + (minute < 10 ? "0" : "") + minute;
        let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=lRsZfmJLjf7hvQqhA568pBWCTmyVfaTgEjP%2Bk9pXXrXNfh0DVuCIQ4NP4yt25SkXeLkQCUlA1K7tUpEnZxHtmQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&";
        url += `base_date=${dt}&base_time=${time}&nx=${x}&ny=${y}`;
        fetch(url).then((resp) => resp.json()).then((data) => setFcst(data.response.body.items.item))
        .catch((err) => console.log(err));
    }, [dt, setFcst, x, y]);

    return (
        <article>
            <header><div className="grid">
                <div className={style.fcstitle}>{area} 단기예보 ({displayDt(dt)})</div>
                <select id="category" name="category" ref={cg} onChange={changeCt}>
                    <option value='' className={style.opt}>선택</option>
                    {options}
                </select>
            </div></header>
            {fcst && <FcstTable fcst={fcst} cg={category} unit={unit} />}
        </article>
    )
}

export default VilageFcst;