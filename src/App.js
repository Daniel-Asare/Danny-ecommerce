import Header from "components/pages/Header";
import  Section  from "components/pages/Section";
import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {AppProvider} from "components/pages/Context";
import {CartProvider} from 'react-use-cart'
import Homepage from "components/pages/Homepage";


function App() {
  return (
   <CartProvider>
    <AppProvider>
      <Router>
      
      <Header/>
      <Section/>
      </Router>
    </AppProvider>
   </CartProvider>
  );
}

export default App;
