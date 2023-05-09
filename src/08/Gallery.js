import { useState, useRef, useEffect } from "react";
import style from './Gallery.module.css';

// 한국관광공사 관광사진갤러리 키워드 검색 목록 조회
// https://www.data.go.kr/data/15101914/openapi.do

const Gallery = () => {
    const txtref = useRef();
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
    }

    const resetItem = (e) => {
        e.preventDefault();
        txtref.current.value = '';
        txtref.current.focus();
    };

    return (
        <article>
            <header>
                <h1>한국관광공사 - 관광사진 정보</h1>
            </header>
            <form>
                <div className="grid">
                    <input type="text" id="searchtx" name="searchtx" ref={txtref} />
                    <div className="grid">
                        <button onClick={(e) => addItem(e)}>검색</button>
                        <button onClick={(e) => resetItem(e)}>취소</button>
                    </div>
                </div>
            </form>
        </article>
    );
}

export default Gallery;