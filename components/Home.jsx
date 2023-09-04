import '../App.css'

const Home = () =>{
    return(
        <div>
            <div class="header">
        <nav>
            <div class="logo"><img src="logo.ico" id="log"></img>ARS</div>
            <div class="menu">
                <ul>
                
                    <li><a href="about.html" id="about">About Us</a></li>
                    
                    <li><a href="contact.html" id="contact">Contact Us</a></li>
			    </ul>
            </div>
            <div class="socials">
                <a href="index.html">Signup</a>
            </div>
        </nav>
        <div class="banner-text">
            <h1>De-Smoking<br/>De-Hazard Algorithm</h1>
            {/*<!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellat.</p> -->*/}
            {/*<!-- <button type="button"></button> -->*/}
            <a href="LearnMore.html" id="lm">Learn More</a>
        </div>        
    </div>
    
                
        </div>
    )
}


export default Home