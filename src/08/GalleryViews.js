import GalleryView from "./GalleryView";
import style from './Gallery.module.css';

const GalleryViews = ({picInfos, search}) => {
    if (picInfos === undefined) return (
        <div className={style.title}>
            검색 결과가 없습니다.
        </div>
    );
    const picLen = picInfos.length;
    const viewslist = picInfos.map((item, idx) =>
        idx % 2 === 0 && idx + 1 < picLen ? <div className={style.views}>
            <GalleryView picInfo={item} key={item.galContentId} search={search} />
            <GalleryView picInfo={picInfos[idx + 1]} key={picInfos[idx + 1].galContentId} search={search} />
        </div> : idx % 2 === 0 ? <div className={style.views}>
            <GalleryView picInfo={item} key={item.galContentId} search={search} />
        </div> : <></>
    )

    return (
        <>
            {viewslist}
        </>
    )
};

export default GalleryViews;