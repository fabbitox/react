import data from './dataTaccident.json';
import TALargeNav from './TALargeNav';
import TAMedNav from './TAMedNav';
import { useState, useEffect, useMemo } from 'react';
import style from './Taccident.module.css';

const Taccident = () => {
    const taData = data.data;
    let large = taData.map((item) => item.사고유형_대분류);
    large = new Set(large);
    large = [...large];
    const largeMedium = taData.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    const blank = useMemo(() => {
        return <div className={style.detailbox}></div>;
    }, []);

    const [selLar, setSelLar] = useState('');
    const [selMed, setSelMed] = useState('');
    const [dataTag, setData] = useState(blank);
    useEffect(() => {
        const accData = taData.filter((item) => item.사고유형_대분류 === selLar && item.사고유형_중분류 === selMed);
        const keys = ["사고건수", "부상신고자수", "경상자수", "중상자수", "사망자수"];
        if (accData.length === 1) {
            setData(keys.map((item) => <div key={item}>
                <div className={style.detailkey}>{item}</div><div>{accData[0][item]}</div>
            </div>));
        }
    }, [selLar, selMed, taData]);

    useEffect(() => {
        setSelMed('');
        setData(blank);
    }, [selLar, blank]);

    return (
        <main className='container'>
            <article>
                <header>
                    <TALargeNav large={large} selLar={selLar} setSelLar={setSelLar} />
                    <TAMedNav largeMedium={largeMedium} selLar={selLar} selMed={selMed} setSelMed={setSelMed} />
                </header>
                <div className='grid'>
                    {dataTag}
                </div>
            </article>
        </main>
    );
}

export default Taccident;