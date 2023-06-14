
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
function App() {

  return (
    <>
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="signin" element={<Login/>}/>
        <Route path="signup" element={<Register/>}/>
        <Route path="promotions" element={<Products/>}/>
        <Route path="/:category" element={<CategoryPage/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
