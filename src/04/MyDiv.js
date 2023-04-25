import MyDivArticle from "./MyDivArticle";

const MyDiv = () => {
    return (
        <main className="container">
            <h1>MyDivs</h1>
            <MyDivArticle />
            <MyDivArticle aname='MyDiv 1' />
            <MyDivArticle aname='MyDiv 2' />
        </main>
    );
}

export default MyDiv;