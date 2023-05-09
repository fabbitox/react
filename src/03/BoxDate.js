import BoxRowsClick from "./BoxRowsClick";
import {useState, useRef, useEffect} from 'react';

const BoxDate = () => {
    const [mvlist, setMvList] = useState();
    const dt = useRef();
    let dtnominus;
    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let year = yesterday.getFullYear();
        let month = yesterday.getMonth() + 1;
        let date = yesterday.getDate();
        dtnominus = `${year}${month < 10 ? '0' + month : month}${date < 10 ? '0' + date : date}`;        
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url += dtnominus;
        fetch(url).then((resp) => resp.json()).then((data) => setMvList(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err));
    }, []);

    const getMvList = () => {
        dtnominus = dt.current.value.replaceAll('-', '');
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url += dtnominus;
        console.log(url);

        fetch(url).then((resp) => resp.json()).then((data) => setMvList(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err));
    }
    return (
        <main className="container">
            <article>
                <header>
                    <nav>
                        <ul><h1>일별 박스오피스</h1></ul>
                        <ul><input ref={dt} type="date" id="dt" name="dt" onChange={() => getMvList()} /></ul>
                    </nav>
                </header>
                <table>
                <thead className="color">
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">영화</th>
                        <th scope="col">매출액</th>
                        <th scope="col">증감</th>
                    </tr>
                </thead>
                {mvlist && <BoxRowsClick mvs={mvlist}/>}
                </table>
            </article>
        </main>
    );
}

export default BoxDate;