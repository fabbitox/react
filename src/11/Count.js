import CntDisplay from "./CntDisplay";
import CntInput from "./CntInput";
import { useState } from "react";

const Count = () => {
    const [val, setVal] = useState(0);

    return (
        <main className="container">
            <CntInput val={val} setVal={setVal} />
            <CntDisplay val={val} />
        </main>
    )
}
export default Count;