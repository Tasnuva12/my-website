import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';




import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Menu  from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
  
   <div>
   <Router>
   <Navbar/>
   <Switch>
   <Route path='/' exact component={Home}/>
   <Route path='/menu' exact component={Menu}/>
   <Route path='/about' exact component={About}/>
   <Route path='/contact' exact component={Contact}/>
   </Switch>
   <Footer/>
   </Router>
   
   </div>
  );
}

export default App;
