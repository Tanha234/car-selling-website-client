
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Headers from './Components/Headers/Headers';
import About from './Components/About/About';

import Footer from './Components/Footer/Footer';
import Explore from './Components/Explore/Explore';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Purchase from './Components/Purchase/Purchase';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Register from './Components/Register/Register';
import AddUser from './Components/AddUser/AddUser';
import DashBoard from './Components/DashBoard/DashBoard';
import MyOrders from './Components/MyOrders/MyOrders';
import DashboardHome from './Components/DashBoard/DashboardHome/DashboardHome';
import Pay from './Components/Pay/Pay';
import Review from './Components/Review/Review';
import MakeAdmin from './Components/DashBoard/DashboardHome/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Components/ManageProducts/ManageProducts';


function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
         
          <Headers/> 
       
        <Switch>
         
          <Route exact path="/">
           <Home/>
          </Route>
          <Route exact path="/home">
           <Home/>
          </Route>
          <Route path="/about">
        <MakeAdmin/>
          </Route>
          <Route path="/register">
           <Register/>
          </Route>
          <Route path="/manage">
            <ManageAllOrders/>
           
          </Route>
          <Route path="/manageProduct">
          <ManageProducts/>
           
          </Route>
          <PrivateRoute path="/explore">
          <Explore/>
          </PrivateRoute>
          <Route path="/contact">
      <Contact/>
          </Route>
          <Route path="/login">
      <Login/>
          </Route>
          <Route path="/pay">
    <Pay/>
          </Route>
          <Route path="/adduser">
   <AddUser/>
          </Route>
          <Route path="/myorders">
   <MyOrders/>
          </Route>
          <Route path="/review">
   <Review/>
          </Route>
          {/* <PrivateRoute path="/dashboard">
<DashBoard/>
          </PrivateRoute> */}
          <PrivateRoute path="/purchase/:id">
      <Purchase/>
          </PrivateRoute>
          <Route path="*">
          <PageNotFound/>
           
          </Route>
          
        </Switch>
        <Route>
            <Footer/>
          </Route>
          
        
          
    
    </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
