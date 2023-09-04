import '../App.css'

const Contact = () =>{
    return(
        <div>
            <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one"><a href="https://maps.app.goo.gl/WSgYMAk6G9Y8fQRc6">Ambattur 53</a> </div>
          {/*<!-- <div class="text-two">chennai 66</div> -->*/}
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 9876543210 </div>
          <div class="text-two">+91 9840765321</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">arsdesmokeandhazard2gmail.com</div>
          <div class="text-two">ars@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any kind of queries, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>

        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="verify"/>
          {/* <button onclick="open('chat.html')"></button> */}
        </div>
      </form>
    </div>
    </div>
  </div>

        </div>
    )
}

export default Contact;