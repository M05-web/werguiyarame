import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../src/components/pages/login";
import PrivateRoute from "../src/global/PrivateRoute";
import MainPage from "../src/components";

const RouteConfig = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <MainPage />
                    </PrivateRoute>

                }
            >
            </Route>
        </Routes>
    )
}

export default RouteConfig;