import style from "./Fcst.module.css";

const FcstTable = ({fcst, cg, unit}) => {
    const valStr = (item) => {
        const val = item.fcstValue;
        if (unit === "코드값") {
            if (cg === "SKY") {
                switch(parseInt(val)) {
                    case 1:
                        return "맑음";
                    case 3:
                        return "구름많음";
                    case 4:
                        return "흐림";
                    default:
                        return "";
                }
            }
            if (cg === "PTY") {
                switch(parseInt(val)) {
                    case 0:
                        return "없음";
                    case 1:
                        return "비";
                    case 2:
                        return "비/눈";
                    case 3:
                        return "눈";
                    case 5:
                        return "빗방울";
                    case 6:
                        return "빗방울눈날림";
                    case 7:
                        return "눈날림";
                    default:
                        return "";
                }
            }
        } else {
            return `${val} ${unit}`;
        }
    }

    const dateFormat = (dt) => {
        return dt.substr(0, 4) + '.' + dt.substr(4, 2) + '.' + dt.substr(6, 2);
    }

    const timeFormat = (time) => {
        return time.substr(0, 2) + ':' + time.substr(2, 2);
    }

    const trs = fcst.filter((item) => item.category === cg).map((item, idx) => <tr key={idx}>
        <td>{dateFormat(item.fcstDate)}</td><td>{timeFormat(item.fcstTime)}</td><td>{valStr(item)}</td>
        </tr>);

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" className={style.fcstdate}>예측일자</th>
                    <th scope="col" className={style.fcstime}>예측시간</th>
                    <th scope="col">예보</th>
                </tr>
            </thead>
            <tbody>{trs}</tbody>
        </table>
    )
}

export default FcstTable;