import '../App.css'
import { useState } from 'react';
import { NavLink,useLocation,useNavigate } from 'react-router-dom';


const About = () =>{

    const navigate = useNavigate();
    const location = useLocation();

   
    return(
       <div>
         <section class="about-us">
    <div class="about">
      <image src="logo.jpg" class="pic"></image>
      <div class="text">
        <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div class="data">
        <a href="home.html" class="hire">Return to Home</a>
        </div>
      </div>
    </div>
  </section>
</div>
    )}


export default About;