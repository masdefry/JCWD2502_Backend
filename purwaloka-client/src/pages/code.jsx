import axios from "axios"
import { useRef } from "react"
import { useParams } from "react-router-dom"

export default function Code(){

    const code = useRef()
    const {id} = useParams()

    const onSubmit = async() => {
        try {
            const userVerify = await axios.patch('http://localhost:5000/user', {token: id, code: code.current.value})
            console.log(userVerify)
        } catch (error) {
            
        }
    }

    return(
        <div>
            <input type="text" ref={code} />
            <button onClick={onSubmit}>
                Submit
            </button>
        </div>
    )
}