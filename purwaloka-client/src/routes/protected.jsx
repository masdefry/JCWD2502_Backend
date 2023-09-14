import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({children}){

    const users = {
        username: 'ryandefryan', 
        role: 'Admin'
    }

    const nav = useNavigate()

    useEffect(() => {
        if(users.role === 'User') return nav('/')
        if(users.role === 'Admin') return nav('/admin/dashboard')
    }, [children])

    return(
        <>
            {children}   
        </>
    )
}