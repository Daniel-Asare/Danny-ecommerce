import Header from "components/pages/Header";
import  Section  from "components/pages/Section";
import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {AppProvider} from "components/pages/Context";
import {CartProvider} from 'react-use-cart'
import Homepage from "components/pages/Homepage";
import Products from "components/pages/Products";
import Detail from "components/pages/Detail";
import Cart from "components/pages/Cart";
import Contact from "components/pages/Contact";


function App() {
  return (
   <CartProvider>
    <AppProvider>
      <Router basename='/'>
      <Header/>
      <Route path="/" exact component={Homepage}/>
      <Route path='/product' component={Products}/>
      <Route path='/product/:id'  component={Detail}/>
      <Route path="/cart" component={Cart}/>
      <Route path='/contact'  component={Contact}/>
      {/* <Section/> */}
      </Router>
    </AppProvider>
   </CartProvider>
  );
}

export default App;
