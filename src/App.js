import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Testme from './components/Testme.js';
import Featured from './components/Featured.js';
import Item_Info from './components/Item_Info.js';
import Items_Available from './components/Items_Available.js';
import Buy_Item from './components/Buy_Item.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/" render = {() => <Featured/> } />
          {/*Passing component Item_Info, as a children is created for practice */}
          <Route path="/items-available" render = {() => <Items_Available item_info={<Item_Info/>}/> } />
          <Route path="/test" render = {() => <Testme item_info={<Item_Info/>}/> } />
          <Route path="/buy-item" render = {() => <Buy_Item item_info={<Item_Info/>}/> } />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
