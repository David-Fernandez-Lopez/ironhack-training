import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/Home/HomePage"

import DetailsPage from '../pages/Details/DetailsPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:_id" element={<DetailsPage />} />

         
            <Route path="/*" element={<h1>Err 404. Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes