import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Verification(){

    const [isVerified, setIsVerified] = useState(false)
    
    const {tkn} = useParams()

    const onVerify = async() => {
        try {
            const verify= await axios.patch('http://localhost:5000/user', {token: tkn})
            
            if(!verify.data.isError) setIsVerified(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onVerify()
    }, [])
    
    return(
        <div className='flex justify-center my-10'>
            {
                isVerified?
                    <h1 className='text-4xl font-semibold'>
                        You're Verified!
                    </h1>
                :
                    <h1 className='text-4xl font-semibold'>
                        You're Unverified!
                    </h1>
            }
        </div>
    )
}