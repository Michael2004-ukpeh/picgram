import {createContext,  useEffect,useReducer} from 'react'
import reducer from "./AuthReducer"
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useHistory } from 'react-router-dom'
const initialState = {
  error: null,
  isLoggedIn: false
}


export const AuthContext = createContext(initialState)

const AuthProvider  = ({children}) =>{
 const history = useHistory()
 const [state, dispatch] = useReducer(reducer, initialState)
  const Login = ({email, password}) =>{
    signInWithEmailAndPassword(auth, email, password)
     .then(() =>{
        history.replace('/profile')
        dispatch({
          type: 'LOGIN',
        })
     }).catch((error) =>{
       console.log(error.message)
     })
  }
  const signUp = ({email, password}) =>{
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCred) =>{
      //  const user = userCred.user
         history.replace('/profile')
        dispatch({
          type: 'SIGN_UP'
        })
     }).catch((error) =>{
       console.log(error.message)
     }

     )
  }
 return(
    <AuthContext.Provider value ={{
      isLoggedIn:state.isLoggedIn,
      signUp,
       Login}}>
      {children}
    </AuthContext.Provider>
  )
 
}

export default AuthProvider