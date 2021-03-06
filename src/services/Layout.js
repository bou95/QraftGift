import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "../components/LandingPage";
export default function Layout() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
