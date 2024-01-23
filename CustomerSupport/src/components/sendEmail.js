import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './img/logo.png';
import back from './img/back1.png';
import './css/addFeedback.css';



export const SendEmail = () => {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2oje7xs', 'template_svun9th', form.current, 'rwHnTTa-CVhIS6CCf')
      .then((result) => {
          console.log(result.text);
          alert("Your Message successfully Send...")
          window.location.replace('/sendEmail');
      }, (error) => {
          console.log(error.text);
      });
   };

    return(
        <div>
            <div className='content'>

                <div className='logo'>
                    <a href = "/"><img src = {logo}/></a>
                </div>

                
                <br/><br/><br/><br/>
                <h4>Send your message </h4>
                <br/>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='outer'>
                            <h5>Contact our Member</h5>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <input type ="text" required  className="form-control" name="user_name" />
                                </div>
                                <div className="form-group">
                                    <label>E-mail :</label>
                                    <input type ="email" required  className="form-control" name="user_email"/>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                   <textarea required  className="form-control" name="message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type = "submit" value = "Send" className = "btn" style={{background:'purple',color:'white'}} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                          <img src = {back} width="200"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
  
}