import React from 'react'
import '../pageStyles/About.css';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style ={{ backgroundImage:`url(${MultiplePizzas})` }}> </div>
      <div className='aboutBottom'> 
      <h1>About Us</h1>
      <p>Pizza Hut is a US based international restaurant chain that is home to one of the world’s favorite food, Pizzas and much more. The brand had started their journey in 1958 in Wichita, Kansas, when two college students Frank and Dan Carney; opened their first pizza restaurant. They laid the foundations for what would later become the largest and most successful pizza restaurant in the world.

Pizza Hut is a division of Yum! Brands Inc. and has more than 13,200 restaurants and delivery units operating worldwide. The 100th country to join the Pizza Hut club under the flag of Yum! Restaurants International is Tanzania. Here, Pizza Hut had delivered pizza at the top of Mt. Kilimanjaro to celebrate the beginning of their operations

At Pizza Hut, the core belief that drives us forward is that great food builds great memories. But that is possible when delicious meals are shared amongst one and all. And to bring this thought to life, Pizza Hut relentlessly tries to bring in the best food offers of the country, to make these fun sharing experiences into great memories to cherish.

Pizza Hut, in Bangladesh, has been trying to make their pizzas more accessible to the customers by both creating value and opening new stores across geographical area. From the beginning of their journey in Bangladesh in 2003, Pizza Hut has opened 8 dine-in restaurants and 8 Pizza Hut outlets from where the valued customers can get their pizzas delivered. From our tantalizing appetizers to signature pan pizzas, pastas, risottos and desserts, our menu has something for everyone. Pizza Hut brand experience resonates generosity, friendships, naturalness and fun; making it stand for much more than the Pizza.</p>
      </div>

    </div>
  )
}

export default About