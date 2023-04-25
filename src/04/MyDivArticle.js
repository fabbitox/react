import style from './MyDiv.module.css';
import { useState } from 'react';

const MyDivArticle = ({ aname }) => {
    aname = aname || 'MyDiv 0';// falsy
    const [cnt, setCnt] = useState(0);

    const like = () => {
        // cnt++;
        setCnt(cnt + 1);
        console.log(cnt);
    };

    return (
        <article>
            <header><h1 className={style.mah1}>{aname}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{aname}-1</li>
                <li className={style.ali}>{aname}-2</li>
            </ul>
            {
                aname === 'MyDiv 1' && <footer>
                    <h2><span onClick={like}>💜</span> {cnt}</h2>
                </footer>/* truthy */
            }
        </article>
    );
}

export default MyDivArticle;