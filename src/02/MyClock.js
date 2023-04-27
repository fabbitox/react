import MyClockTime from "./MyClockTime";
import MyClockImage from "./MyClockImage";
import MyClockTimeState from "./MyClockTimeState";
import "../01/Hello.css";

const MyClock = () => {
    return (
        <main className="container">
            <article data-theme='dark'>
                <MyClockImage />
                <MyClockTimeState />
            </article>
        </main>
    );
}

export default MyClock;