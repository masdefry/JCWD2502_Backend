import { Route } from "react-router-dom";

import Home from "../pages/home";
import Dashboard from "../pages/admin/dashboard";

// Protected.jsx
import Protected from "./protected";

const routes = [
    <Route
        path='/'
        element={
            <Protected>
                <Home />
            </Protected>
        } 
    />, 
    <Route 
        path='/admin/dashboard'
        element={
            <Protected>
                <Dashboard />
            </Protected>
        }
    />
]

export default routes