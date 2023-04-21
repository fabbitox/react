// const BoxRows = (props) => {
const BoxRows = ({mvs}) => {
    // const mvs = props.mvs;
    // console.log("boxrows", mvs);

    let trTags = [];
    for (let mv of mvs) {
        // console.log(mv.rank, mv.movieNm, mv.salesAmt, mv.rankInten);
        let inten = parseInt(mv.rankInten);
        let rankEmoji = getRankEmoji(inten);
        trTags.push(
            <tr className="mvtr" key={mv.movieCd}>
                <td>{mv.rank}</td>
                <td>{mv.movieNm}</td>
                <td><span  className="price">&#8361; {parseInt(mv.salesAmt).toLocaleString()}</span></td>
                <td>{rankEmoji} {inten == 0 ? '' : Math.abs(inten)}</td>
            </tr>
        );
    }
    // console.log(trTags);

    return (
        <>
            {trTags}
        </>
    );
}

const getRankEmoji = (rankInten) => {
    if (rankInten == 0) {
        return '';
    } else if (rankInten > 0) {
        return '🔼';
    } else {
        return '🔽';
    }
}

export default BoxRows;