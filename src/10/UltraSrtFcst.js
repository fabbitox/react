import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";

const UltraSrtFcst = () => {
    const area = useParams().area;
    const dt = useParams().dt;

    const displayDt = (dt) => {
        return dt.substr(0, 4) + '/' + dt.substr(4, 2) + '/' + dt.substr(6, 2);
    }

    return (
        <article>
            <header><div className="grid">
                {area} 단기예보({displayDt(dt)})
            </div></header>
            <FcstTable />
        </article>
    )
}

export default UltraSrtFcst;