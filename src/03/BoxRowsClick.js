import { useState } from "react";
import './Box.css';

const BoxRows = ({mvs}) => {
    const [footTag, setTootTag] = useState('');
    const showMv = (mv) => {
        console.log(mv);
        setTootTag(`[${mv.movieCd}] ${mv.movieNm} 개봉일: ${mv.openDt}`);
    }

    let trTags = [];
    for (let mv of mvs) {
        // console.log(mv.rank, mv.movieNm, mv.salesAmt, mv.rankInten);
        let inten = parseInt(mv.rankInten);
        let rankEmoji = getRankEmoji(inten);
        trTags.push(
            <tr className="mvtr" key={mv.movieCd} onClick={() => showMv(mv)}>
                <td><span className="rank">{mv.rank}</span></td>
                <td>{mv.movieNm}</td>
                <td><span  className="price">&#8361; {parseInt(mv.salesAmt).toLocaleString()}</span></td>
                <td><span className="arrow">{rankEmoji} </span>{inten === 0 ? '' : Math.abs(inten)}</td>
            </tr>
        );
    }
    // console.log(trTags);

    return (
        <>
            <tbody>{trTags}</tbody>
            <tfoot><tr><th colSpan={4}>{footTag}</th></tr></tfoot>
        </>
    );
}

const getRankEmoji = (rankInten) => {
    if (rankInten === 0) {
        return '';
    } else if (rankInten > 0) {
        return '▲';
    } else {
        return '▼';
    }
}

export default BoxRows;