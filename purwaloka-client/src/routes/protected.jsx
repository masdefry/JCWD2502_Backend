import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({children, adminPage, userPage}){

    const users = {
        username: 'ryandefryan', 
        role: 'User'
    }

    const [loading, setLoading] = useState(true)

    const nav = useNavigate()

    useEffect(() => {
        if(users.role === 'User' && adminPage) return setTimeout(() => { setLoading(false) }, 3000), nav('/')
        if(users.role === 'Admin' && userPage) return setTimeout(() => { setLoading(false) }, 3000), nav('/admin/dashboard')
        
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [children])

    return(
        <>
            {
                loading?
                    'Loading...'
                :
                    children
            }   
        </>
    )
}