import { useState, useRef } from "react";
import './MyRef.module.css';

const MyRefForm = () => {
    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input type="text" id="txt1" name="txt1" required />
                            </div>
                            <div><button>등록</button><button>취소</button></div>
                        </div>
                    </form>
                </header>
                <div className="grid"></div>
            </article>
        </main>
    );
}

export default MyRefForm;