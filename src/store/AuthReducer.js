const reducer = (state,action) =>{
    switch (action.type){
        case "SIGN_UP":
            return {
                ...state,
                isLoggedIn:true
            }
    
    case "LOGIN":
        return {
           ...state,
           isLoggedIn:true
        }
    case "LOG_OUT":
        return {
          ...state,
          isLoggedIn:false
        }
    default: 
       return state
    }
}
 export default reducer