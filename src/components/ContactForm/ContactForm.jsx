import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (!name) {
      formErrors.name = "El nombre es requerido";
    }

    if (!email) {
      formErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email inválido";
    }

    if (!phone) {
      formErrors.phone = "El teléfono es requerido";
    } else if (phone.length < 9) {
      formErrors.phone = "El teléfono debe tener 9 dígitos";
    }

    if (!message) {
      formErrors.message = "El mensaje es requerido";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          "service_2hyjnu4",
          "template_6aout0m",
          form.current,
          "3x9hRPxHXn1b864Su"
        )
        .then(
          (result) => {
            setSuccessMessage("Mensaje enviado con éxito");
            setTimeout(() => {
              setSuccessMessage("");
              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="inputs-containers">
        <input
          type="text"
          placeholder="Nombre"
          name="user_name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="inputs-containers">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="inputs-containers">
        <input
          type="tel"
          placeholder="Teléfono"
          name="user_phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="textarea-container">
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-msg"
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button className="btn-form" type="submit" value="Send">
        Enviar
      </button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
