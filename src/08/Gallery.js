import { useState, useRef, useEffect } from "react";
import style from './Gallery.module.css';
import GalleryViews from "./GalleryViews";

// 한국관광공사 관광사진갤러리 키워드 검색 목록 조회
// https://www.data.go.kr/data/15101914/openapi.do

const Gallery = () => {
    const txtref = useRef();
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const [picInfos, setPicInfos] = useState([]);

    const searchItem = (e) => {
        e.preventDefault();
        if (txtref.current.value === '') return;
        const word = encodeURI(txtref.current.value);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=lRsZfmJLjf7hvQqhA568pBWCTmyVfaTgEjP%2Bk9pXXrXNfh0DVuCIQ4NP4yt25SkXeLkQCUlA1K7tUpEnZxHtmQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=B&keyword=${word}&_type=json`;
        fetch(url).then((resp) => resp.json()).then((data) => setPicInfos(data.response.body.items.item))
        .catch((err) => console.log(err));
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
                    <input type="text" id="searchtx" name="searchtx" ref={txtref} placeholder="키워드를 입력하세요" />
                    <div className="grid">
                        <button onClick={(e) => searchItem(e)}>검색</button>
                        <button onClick={(e) => resetItem(e)} className={style.cancel}>취소</button>
                    </div>
                </div>
            </form>
            <GalleryViews picInfos={picInfos} />
        </article>
    );
}

export default Gallery;