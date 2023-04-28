import data from './dataFrcst.json';
import './Frcst.css';
import { useState } from 'react';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    //dtKey.map((item) => console.log(data[item]));
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    //cnKey.map((item) => console.log(data[item]));
    let dtcn = {};
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]);
    //console.log(dtcn);
    const [dtcnItems, setContent] = useState('');
    const [selDt, setSel] = useState();
    const detail = (k) => {
        setSel(k);
        let dtcnItems = dtcn[k].split(',');
        dtcnItems = dtcnItems.map((item) => item.split(':'));
        dtcnItems = dtcnItems.map((item) => <div key={item.toString().trim()}>
            <span className='area'>{item[0].trim()}</span>
            <span className={setClass(item)}>{(item[1].trim() === '높음' ? '⚠' : '') + item[1].trim()}</span>
        </div>);
        //console.log(dtcnItems);
        setContent(dtcnItems);

        function setClass(item) {
            return item[1].trim() === '낮음' ? 'low' : item[1].trim() === '보통' ? 'normal' : 'high';
        }
    }

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item) => <button key={item} onClick={() => detail(item)} className={selDt === item ? 'selected' : ''}>{item}</button>);

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className='grid'>
                        {dtTag}
                    </div>
                </header>
                <div className='grid'>
                    {dtcnItems}
                </div>
            </article>
        </main>
    )
}

export default Frcst;