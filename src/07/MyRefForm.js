import { useState, useRef, useEffect } from "react";
import style from './MyRef.module.css';

const MyRefForm = () => {
    const txtref = useRef();
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    const addItem = (e) => {
        e.preventDefault();
        if (!itemArr.current.includes(txtref.current.value)) {
            itemArr.current = [...itemArr.current, txtref.current.value];
        }
        setItemTag(itemArr.current.map((item) => <span key={item} className={style.item}>{item}</span>));
        resetItem();
    };

    const resetItem = () => {
        txtref.current.value = '';
        txtref.current.focus();
    };

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt" name="txt" required />
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div>{itemTag}</div>
            </article>
        </main>
    );
}

export default MyRefForm;