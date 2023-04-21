import MyClockTime from "./MyClockTime";
import MyClockImage from "./MyClockImage";

const MyClock = () => {
    return (
        <main className="container">
            <article data-theme='dark'>
                <MyClockImage />
                <MyClockTime />
            </article>
        </main>
    );
}

export default MyClock;