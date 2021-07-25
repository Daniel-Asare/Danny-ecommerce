import Header from "components/pages/Header";
import  Section  from "components/pages/Section";
import React from "react";
import {BrowserRouter as Router,Switch} from "react-router-dom";
import {AppProvider} from "components/pages/Context";
import {CartProvider} from 'react-use-cart'


function App() {
  return (
   <CartProvider>

    <AppProvider>
    <div className="App">
      <Router>
        <Switch>
      <Header/>
      <Section/>
      </Switch>
      </Router>
    </div>
    </AppProvider>
    
   </CartProvider>
  );
}

export default App;
