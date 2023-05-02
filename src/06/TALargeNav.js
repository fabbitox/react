import style from './Taccident.module.css';

const TALargeNav = ({large, selLar, setSelLar}) => {
    const liTags = large.map((item) =>
        <li key={item}>
            <button onClick={() => setSelLar(item)} className={selLar === item ? style.selected : ""}>
                {item}
            </button>
        </li>
    );
    
    return (
        <nav>
            <ul><h1>사고유형 대분류</h1></ul>
            <ul>
                {liTags}
            </ul>
        </nav>
    )
}

export default TALargeNav;