import CntDisplay from "./CntDisplay";
import CntInput from "./CntInput";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Count = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Routes>
                    <Route path='/input' element={<CntInput />} />
                    <Route path='/display' element={<CntDisplay />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default Count;