import React, { useState } from "react";
import '../pages/styleSheetPages/ContactUs.css'
import Navbar from '../components/Navbar'


function ContactForm() {
  const [message, setMessage] = useState("");
  

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = "contact@sakurakimonos.com";
    const subject = "Query form";
    const body = message;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setModalIsOpen(true);
    window.location.reload();
  };

  return (
    <>
    <Navbar/>
    <div className="text-container-contact ">
      <form className="form-contact" onSubmit={handleFormSubmit}>
        <h2 className="titleContact">Contact with us</h2>
        <label>
          <textarea
            value={message}
            onChange={handleTextareaChange}
            placeholder="Write your message here"
          />
        </label>
        <button className="btn btn-primary" id="btn-ad" type="submit">
        Send Message
        </button>
        
      </form>
      
    </div>
    </>   
  );
}

export default ContactForm;
