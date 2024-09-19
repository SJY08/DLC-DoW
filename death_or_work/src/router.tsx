import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/Startpage"
import LoginPage from "./pages/LoginPage"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
