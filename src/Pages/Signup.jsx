import { useState } from "react"
import { NavLink } from "react-router"

function Signup(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(false);

    const handleNameInput = (event)=> setName(event.target.value);
    const handleEmailInput = (event)=> setEmail(event.target.value);    
    const handlePasswordInput = (event) => checkPassword(event, confirmPassword, setPassword, setPasswordMatch)
    const handlePasswordConfirmInput = (event)=> checkPassword(event, password,setConfirmPassword, setPasswordMatch)
    const handleOnSignUpClick = ()=> console.log(name);

    return(<>
            <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
                <h1 className="text-3xl me-60">Sign up</h1>
                <div className="bg-[#444444] p-4 flex flex-col gap-4 rounded-2xl">
                   
                    <input id="nameInput" className="bg-black border rounded-[10px] px-2 h-12 w-xs" type="text" value ={name} onChange={handleNameInput} placeholder="Name"/>
                   
                    <input id="emailInput" className="bg-black border rounded-[10px] px-2 h-12" type="text" placeholder="Email" value={email} onChange={handleEmailInput}/>
                  
                    <input id="passwordInput" className="bg-black border rounded-[10px] px-2 h-12" type="text" placeholder="Password" value={password} onChange={handlePasswordInput}/>
                    
                    <input id="confirmPasswordInput" className="bg-black border rounded-[10px] px-2 h-12" type="text" placeholder="Confirm Password" value={confirmPassword} onChange={handlePasswordConfirmInput}/>
                    
                    <p className={passwordMatch?"text-green-600":"text-red-600"}>{confirmPassword!=''? passwordMatch? "Password Matched" : "Password Does not Match":''}</p>

                </div>
                <div className="m-2 flex">
                <NavLink to="/" className="border rounded-[25px] me-2 p-2 px-5 cursor-pointer hover:bg-[#FFFFFF] hover:text-black"> Cancel </NavLink>
                <button className="border rounded-[25px] p-2 px-5 cursor-pointer hover:bg-[#FFFFFF] hover:text-black" onClick={handleOnSignUpClick}> Sign up </button>
                </div>
            </div>
        </>
    )
}


function checkPassword(event,passwordType, setPassword, setPasswordMatch){

/*
Function to check if both the passwords match
Function Args : event -> Takes input from the input field and stores 'sets' it to the corresponding password variable
                passwordType -> Whether the password we take is from actual password or confirmed password field
                setPassword -> function pointer that takes useState functions to set the password to the corresponding variables
                setPasswordMatch -> useState boolean function to check and set state whether passwords match or not 'This helps in displaying password matching info'
*/
    setPassword(event.target.value);
        if(event.target.value == passwordType){
            setPasswordMatch(true);
        }else{
            setPasswordMatch(false);
        }
}


export default Signup