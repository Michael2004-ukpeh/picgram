import Hero from './components/Hero'

import {Switch, Route, Redirect} from 'react-router-dom'

import Layout from "./components/Layout";
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
function App() {
  return (
    <Layout>

    <Switch>
     <Route path = "/" exact>
        <Hero />
     </Route>
     <Route path = "/auth" >
        <AuthForm />
     </Route>
     <Route path = "/profile">
        <Profile/>
     </Route>
     <Route path = '*' >
       <Redirect to ="/"/>
     </Route>
    </Switch>
   
 
    </Layout>
  );
}

export default App;
