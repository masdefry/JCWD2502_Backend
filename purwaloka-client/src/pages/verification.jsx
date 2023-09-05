import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Verification(){

    const [isVerified, setIsVerified] = useState(false)
    
    const {id} = useParams()
    console.log(id)

    const onVerify = async() => {
        try {
            const verify= await axios.patch('http://localhost:5000/user', {token: id})
            
            if(!verify.data.isError) setIsVerified(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onVerify()
    }, [])
    
    return(
        <div>
            {
                isVerified?
                    'Verified'
                :
                    'Unverified'
            }
        </div>
    )
}