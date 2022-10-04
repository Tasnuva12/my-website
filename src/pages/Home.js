import React from 'react'
import {Link} from 'react-router-dom';
import '../pageStyles/Home.css';
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url('https://raw.githubusercontent.com/machadop1407/react-website-tutorial/main/src/assets/pizza.jpeg')` }}>
    <div className="headerContainer" >
    <h1>My Homemade Pizza</h1>
    <p>Healthy and Tasty</p>
    
     <Link to="/menu"><button>ORDER NOW</button></Link>
    
    
    </div>
    </div>
  )
}

export default Home;