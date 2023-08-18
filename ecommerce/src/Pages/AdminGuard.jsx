import { useNavigate } from "react-router-dom"
const users = {
    role: 'user',
    isVerify: false
}

export default function AdminGuard(props){
    const navigate = useNavigate()
    return(
        <>
            {
                users.role === 'admin'?
                    
                <><h1>SALAH</h1></>
                :
                    users.role === 'user' && users.isVerify === true?
                    <>
                        {props.component}
                    </>
                    :
                    <>BELUM VERIFY</>
            }
        </>
    )
}