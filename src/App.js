import Home from './Home'
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './pages/login/Login'
import {useEffect} from 'react'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51J7fSKKo2faR8dfaNVlKOrxmlgsSPFTsNVklukt2YGAHA7r2cHPIs4k5yNo7EnLSW13zr5U3ibeQV3TBedD02jOr00V6pXDyuy');

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS =>>>>', authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 

  return (
      <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
      <Login />
        </Route>
        <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
        </Route>
        <Route exact path="/">
      <Header />
      <Home />
        </Route>
        <Route path="/checkout">
      <Header />
      <Checkout />
        </Route>
      </Switch>
    </div>
      </Router>
  );

  }
export default App
