import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/Startpage"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
