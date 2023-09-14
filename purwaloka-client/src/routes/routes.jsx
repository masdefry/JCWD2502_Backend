import { Route } from "react-router-dom";

import Home from "../pages/home";
import HotelList from './../pages/hotellist';
import Dashboard from "../pages/admin/dashboard";
import Login from "../pages/login";

// Protected.jsx
import Protected from "./protected";

const routes = [
    <Route
        path='/'
        element={
            <Protected userPage={true}>
                <Home />
            </Protected>
        } 
    />, 
    <Route 
        path='/admin/dashboard'
        element={
            <Protected adminPage={true}>
                <Dashboard />
            </Protected>
        }
    />,
    <Route 
        path='/hotel/search'
        element={
            <Protected userPage={true}>
                <HotelList />
            </Protected>
        }
    />,
    <Route 
        path='/login'
        element={
            <Protected userPage={true}>
                <Login />
            </Protected>
        }
    />
]

export default routes