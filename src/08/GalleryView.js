import style from './Gallery.module.css';

const GalleryView = ({picInfo, search}) => {
    const keywordTags = [...new Set(picInfo.galSearchKeyword.split(', '))]
    .map((item) => <span className={style.keyword} key={picInfo.galContentId + item} onClick={() => search(item)} role='button'>{item}</span>);

    return (
        <article>
            <header>
                <span className={style.title}>{picInfo.galTitle}</span>
                <span className={style.location}>{picInfo.galPhotographyLocation}</span>
            </header>
            <img src={picInfo.galWebImageUrl} alt={picInfo.galTitle + ' 이미지'} />
            <div>
                {keywordTags}
            </div>
        </article>
    )
};

export default GalleryView;