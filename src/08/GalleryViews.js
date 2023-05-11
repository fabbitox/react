import GalleryView from "./GalleryView";
import style from './Gallery.module.css';

const GalleryViews = ({picInfos, search}) => {
    if (picInfos === undefined) return (
        <div className={style.title}>
            검색 결과가 없습니다.
        </div>
    );
    const picount = picInfos.length;
    const last = picount % 2 === 1 ? <GalleryView picInfo={picInfos[picount - 1]} key={picInfos[picount - 1].galContentId} /> : <></>;
    const viewslist = picInfos.filter((item, idx) => (idx % 2 === 0 && idx < picount - 1)).map((item, idx) => 
        <div className={style.views}>
            <GalleryView picInfo={item} key={item.galContentId} search={search} />
            <GalleryView picInfo={picInfos[idx * 2 + 1]} key={picInfos[idx * 2 + 1].galContentId} search={search} />
        </div>);

    return (
        <>
            {viewslist}
            <div>{last}</div>
        </>
    )
};

export default GalleryViews;