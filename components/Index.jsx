import { useLocation, useNavigate } from 'react-router'
import '../App.css'
import { useState } from 'react';

const Index = () =>{
 
    const location = useLocation();
    const navigate = useNavigate();

    const[logger,setLogger] = useState({
           email:" ",
           names:" ",
           password:" "
    });

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setLogger({...logger,[name]:value})
    }

    const handleSubmit1 = async(event)=>{
        event.preventDefault();
        const{email,password} = logger;
        try{
           const res = await fetch('/Index',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
           })

         if(res.status === 400 || !res){
            window.alert("Invalid Credentials")
         }
         else{
            window.alert("Login successfully")
            window.location.reload()
         }
        }catch(e){
            console.log(e)
        }
    }

    const handleSubmit2 = async(event) =>{
        const {name,email,password} = logger;
        try{
            const res = await fetch('/Index',{
             method:'POST',
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                 name,email,password
             })
            })
 
          if(res.status === 400 || !res){
             window.alert("Invalid Credentials")
          }
          else{
             window.alert("Login successfully")
             navigate(`/dash/${name}`)
             window.location.reload()
          }
         }catch(e){
             console.log(e)
         }

    }
    return(
    <div>
        <div class="container">
        <div class="forms">

            {/* Login Form */}
            <div class="form login">
                <span class="title">Login</span>

                <form onSubmit={handleSubmit1}>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email" name='email' className='email'
                        value={logger.email} onChange={handleChange} required/>
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="password" placeholder="Enter your password" className='password' name='password'
                        value={logger.password} onChange={handleChange} required/>
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" class="text">Remember me</label>
                        </div>
                        
                        <a href="#" class="text">Forgot password?</a>
                    </div>

                    <div class="input-field button">
                        <input type="button" value="Login"/>
                    </div>
                </form>

                <div class="login-signup">
                    <span class="text">Not a member?
                        <a href="#" class="text signup-link">Signup Now</a>
                    </span>
                </div>
            </div>

           {/* <!-- Registration Form -->*/}
            <div class="form signup">
                <span class="title">Registration</span>

                <form onSubmit={handleSubmit2}>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your name" className='name' name='name' 
                        value={logger.names} onChange={handleChange}  required/>
                        <i class="uil uil-user"></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email"  className="email" name='email' 
                        value={logger.email} onChange={handleChange} required/>
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="password" placeholder="Create a password" className='password' name='password' 
                        value={logger.password} onChange={handleChange}/>
                        <i class="uil uil-lock icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="password" placeholder="Confirm a password" required/>
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="termCon"/>
                            <label for="termCon" class="text">I accepted all terms and conditions</label>
                        </div>
                    </div>

                    <div class="input-field button">
                        <input type="button" value="Signup"/>
                    </div>
                </form>

                <div class="login-signup">
                    <span class="text">Already a member?
                        <a href="#" class="text login-link">Login Now</a>
                    </span>
                </div>
            </div>
        </div>
    </div>

     <script src="script.js"></script> 
    </div>
    )
}

export default Index