import { Link } from "react-router-dom";
import style from './Route.module.css';

const RouteNav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/' role="button" className={style.button}>Home</Link></li>
                <li><Link to='/page1/🍓' role="button" className={style.button}>Page1</Link></li>
                <li><Link to='/page2?item1=🍈&item2=🍊' role="button" className={style.button}>Page2</Link></li>
            </ul>
        </nav>
    )
}

export default RouteNav;