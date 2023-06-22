import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import  {Header}  from "./components/Header/Header";
import HomeScreen from "./components/pages/HomeScreen";
import ShopScreen from "./components/pages/ShopScreen";
import CartScreen from "./components/pages/CartScreen";
import SuccessScreen from "./components/pages/SuccessScreen";

function App() {
  return (
    
    <Router>
    <Header/>  
      <ul>
        <Link to = "/">HomeScreen</Link>
        <Link to = "/shopscreen">ShopScreen</Link>
        <Link to = "/cartscreen">CartScreen</Link>
        <Link to = "/sucessscreen">SuccessScreen</Link>
        
      </ul>
      <Routes> 
        <Route exact path='/'element={<HomeScreen/>}>
                  
        </Route>
        <Route exact path='/cartscreen'element={<CartScreen/>}>
                  
        </Route>

        <Route exact path='/shopscreen'element = {<ShopScreen/>}>
                  
        </Route>       
       
        <Route exact path='/sucessscreen'element = {<SuccessScreen/>}>
                  
        </Route>


      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
