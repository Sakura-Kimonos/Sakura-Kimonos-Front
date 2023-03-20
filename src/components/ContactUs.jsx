import React, { useState } from "react";
import Modal from "react-modal";


function ContactForm() {
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = "celiacueria1999@gmail.com";
    const subject = "Mensaje desde formulario de contacto";
    const body = message;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setMessage("");
  };

  return (
    <div className="container-form">
      <form className="form-contact" onSubmit={handleFormSubmit}>
        <h2 className="titleContact">Contacta conmigo</h2>
        <label>
          <textarea
            value={message}
            onChange={handleTextareaChange}
            placeholder="Escribe aqui tu mensaje"
          />
        </label>
        <button className="btn btn-primary" id="btn-ad" type="submit">
          Enviar mensaje
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-title">Mensaje enviado</h2>
        <p className="modal-message">
          Tu mensaje ha sido enviado correctamente. Te responderé lo antes
          posible.
        </p>
        <button className="modal-close-btn" onClick={closeModal}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
}

export default ContactForm;
