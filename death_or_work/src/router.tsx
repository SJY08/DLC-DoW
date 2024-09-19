import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/Startpage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
