import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Order from "./Orders"
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51I3voGBDHr3gme8fD0VXSksHyS8iGHV3VGvLLg07RlypSrCbt1vo6XAkHZPxJPS1UgasMuv9M4gOvbkZtqJHcCiX00ssVYEiqN');

// User authentication with frebase
function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() =>{
    // will only run once when the app component loads

    // Listener
    // data layer that connected with firebase
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //the user just logged in / the user was logged in
         dispatch({
          type: "SET_USER", 
          user: authUser // that come from firebase
        })
      }
      else{
        // the user is logged out
        dispatch({
            type: "SET_USER",
            user: null  // set user to null so nobody is logged in
          } )
      }
    })
  },[])
  return (
    // BEM
    <Router>
      <div className="App">
          <Switch>
          <Route path="/order">
           <Header />
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
           <Header />
           <Checkout/>
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}> 
          <Payment />          
          </Elements>
          </Route>
          
          <Route path="/">
           <Header />
           <Home />
          </Route>
          </Switch>
    </div>
    </Router>

  );
}

export default App;
