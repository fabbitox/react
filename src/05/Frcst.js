import data from './dataFrcst.json';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    dtKey.map((item) => console.log(data[item]));

    return (
        <>
        </>
    )
}

export default Frcst;