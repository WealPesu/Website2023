import './style/App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Submit from "./components/Submit"
import Interface from './components/Interface';
import Navbar from './Navbar';
import {Routes,Route,Navigate} from 'react-router-dom';
import { useEffect ,useState} from 'react';

const App=()=> {
  const [user,setUser] = useState(null)
  useEffect(()=>{
      const getUser = ()=>{
        fetch("http://localhost:5000/auth/login/success",{
          method:"GET",
          credentials:"include",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            "Access-Control-Allow-Credentials":true,
          }
        }).then(response=>{
          if(response.status===200) return response.json()
          throw new Error("failed to authenticate user")
        }).then(resObject=>{
          setUser(resObject.user)
        }).catch(err=>{
          console.log(err)
        })
      }
      getUser()
  },[])
  // console.log(user)
  return (
    <>
    <Navbar user={user}/>
    <Routes>
    <Route path="/Interface" element={user? <Interface/>:<SignIn/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/SignIn" element={user ? <Navigate to="/"/>:<SignIn/>}/>
    <Route path="/submit" element={<Submit/>}/>
    </Routes>
    </>
  );
}

export default App;
