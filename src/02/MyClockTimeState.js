import { useState } from "react";

const MyClockTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    return (
        <footer>
            <h1>{time}</h1>
        </footer>
    );
}

export default MyClockTime;