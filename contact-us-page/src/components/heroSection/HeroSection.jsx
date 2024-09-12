import Button from '../button/Button';
import styles from './heroSection.module.css';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';

const HeroSection = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const SubmittedData = () => {
  return(
    <div>
      <h2>Submitted Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  )
};

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
  };

  return (
    <div className={`${styles.contact_section} `}>
      <div>
        <h1>
          CONTACT US
        </h1>
        <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </p>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
          <div className={`${styles.top_btn}`}>
          <Button 
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize='24px'/>}
          />
           <Button 
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize='24px'/>}
          />
          </div>
          <Button 
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<IoMail fontSize='24px'/>}
          />

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor='name'>Name</label>
              <input type='text' name='text'/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email'/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor='text'>Text</label>
              <textarea name='text' rows='8'/>
            </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
            <Button 
            text="SUBMIT"
            />
            </div>
          </form>
        </div>
        
        <div className={`${styles.contact_image}`}>
          <img src={`${process.env.PUBLIC_URL}/images/img.svg`} alt='contact-img'/>
        </div>
      </div>
      {<SubmittedData />}
    </div>
  )
}

export default HeroSection;