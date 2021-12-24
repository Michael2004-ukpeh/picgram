import React,{useRef, useState, useContext} from 'react'
import { AuthContext } from '../store/AuthContext'

const AuthForm = () => {
    const {Login, signUp} = useContext(AuthContext)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState(true)
    const passwordRef = useRef();
    const emailRef = useRef()
    const submitHandler = (e) =>{
        e.preventDefault();
        let details = {
            email:email,
            password:password,
        }
        if(isLogin){
          Login(details)

        }else{
           signUp(details)
        }
    }

    const switchMode = () => {
        setIsLogin(!isLogin)
    }
    return (
        <section className="w-full bg-gray-100 px-10 py-10 pb-16 min-h-80">
            <h1 className='text-center
             font-extrabold mb-6 
             text-4xl md:text-6xl'>{isLogin ? "Login" : "Sign Up"}</h1>
            <div className="form w-3/4 mx-auto h-80">
                <form onSubmit={submitHandler} className="px-2 flex flex-col   justify-center items-center rounded-md py-6 mx-auto w-90  max-w-lg min-h-full bg-gray-300 ">
                <div className="input block w-3/4 mb-4">
                    <label className="block font-semibold" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 rounded-sm"
                     type="email" 
                     ref={emailRef}
                     value={email}
                     onChange={ e => setEmail(e.target.value)}
                     name="email" 
                     id="email"
                      required/>
                </div>
                <div className="input block w-3/4 mb-6">
                    <label className="block font-semibold" htmlFor="password">Password</label>
                    <input className="w-full px-4 py-2 rounded-sm" 
                    type="password"
                     name="password" 
                     id="password" 
                     value={password}
                     onChange={e=> setPassword(e.target.value)}
                     ref={passwordRef}
                     required/>
                </div>
                <div className="actions w-1/2 flex flex-col justify-center items-center">
                     <button className="bg-red-600 rounded-md w-full text-white py-2 px-8"type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                     <p className="text-center text-lg">Or</p>
                     <button className="font-semibold underline border-none active: border-none" onClick={switchMode}>{isLogin ? "Create A New Account" : "Login with an  existing account"}</button>
                </div>
               
                </form>
            </div>

        </section>
    )
}

export default AuthForm
