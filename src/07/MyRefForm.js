import { useState, useRef, useEffect } from "react";
import './MyRef.module.css';

const MyRefForm = () => {
    const txtref = useRef();
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const itemArr = useRef([]);
    const [itemTag, setItemTage] = useState();

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log('add item =', itemArr.current);
    };

    const resetItem = (e) => {
        e.preventDefault();
        console.log('reset item');
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
                <div className="grid"></div>
            </article>
        </main>
    );
}

export default MyRefForm;