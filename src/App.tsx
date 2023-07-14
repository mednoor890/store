
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import LandingPage from './pages/LandingPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Products from './pages/Products';
import CategoryPage from './components/Category/Category';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
//import Promotion from './pages/Promotion';
function App() {

  return (
    <>
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="signin" element={<Login/>}/>
        <Route path="signup" element={<Register/>}/>
        <Route path="promotions" element={<Products/>}/>
        <Route path="promotions/:page" element={<Products/>}/>
        <Route path="/:category" element={<CategoryPage/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile/:userId" element={<UserProfile/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
