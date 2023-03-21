import React, { useState } from "react";
import Modal from "react-modal";
import '../pages/styleSheetPages/ContactUs.css'
import Navbar from '../components/Navbar'


function ContactForm() {
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const closeModal = () => {
    setModalIsOpen(false);
    setMessage("");
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="text-container-contact">
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
        {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-title">Message Sent</h2>
        <p className="modal-message">
        Your message has been sent successfully. We will reply to you as soon as possible.
        </p>
        <button className="modal-close-btn" onClick={closeModal}>
          Close
        </button>
      </Modal> */}
      </form>
      
    </div>
    </>   
  );
}

export default ContactForm;
