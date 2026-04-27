import { Routes, Route } from "react-router-dom";
// import DashboardPage from "../features/dashboard/DashboardPage";
import Login from "../features/auth/Login";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import Layout from "../layouts/Layout";
// import Analytics from "../features/analytics/Analytics";
import React, {Suspense} from "react";
const DashboardPage = React.lazy(()=> import("../features/dashboard/DashboardPage"));
const Analytics = React.lazy(()=>import("../features/analytics/Analytics"));
function AppRoutes(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<ProtectedRoute><Layout><DashboardPage/></Layout></ProtectedRoute>}/>
            <Route path="/analytics" element={<ProtectedRoute><Layout><Analytics></Analytics></Layout></ProtectedRoute>}/>
        </Routes>
        </Suspense>
    );
}
export default AppRoutes;