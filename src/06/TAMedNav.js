import style from './Taccident.module.css';

const TAMedNav = ({largeMedium, selLar, selMed, setSelMed}) => {
    const medium = largeMedium.filter((item) => item[0] === selLar).map((item) => item[1]);
    const liTags = medium.map((item) =>
        <li key={item}>
            <button onClick={() => setSelMed(item)} className={selMed === item ? style.selected : style.medium}>
                {item}
            </button>
        </li>
    );
    
    return (
        <nav>
            <ul><h1>사고유형 중분류</h1></ul>
            <ul>
                {liTags}
            </ul>
        </nav>
    )
}

export default TAMedNav;