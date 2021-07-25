import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from './Products'
import Detail from './Detail'
import Cart from './Cart'
import Homepage from './Homepage'
import Contact from './Contact'



const Section = () => {
  return (
    <section>
      <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/product' exact component={Products}/>
      <Route path='/product/:id' exact  component={Detail}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path='/contact' exact component={Contact}/>
      </Switch>
    </section>
  )
}

export default Section;
