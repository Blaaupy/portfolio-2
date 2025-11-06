import { useState, useEffect, useRef } from "react";
import "./Contact.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const introRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    [introRef, formRef, infoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-page page-container">
      <div className="contact-intro fade-up" ref={introRef}>
        <h1>Contactez-moi</h1>
        <p>
          Vous avez un projet, une question ou simplement envie de dire bonjour ? <br />
          N’hésitez pas à m’envoyer un message !
        </p>
      </div>

      <div className="contact-wrapper">
        <form
          className="contact-form fade-up"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn">
            Envoyer
          </button>
          {success && <p className="success-msg">Merci, message envoyé !</p>}
        </form>

        <div className="contact-info fade-up" ref={infoRef}>
          <h3>Mes coordonnées</h3>
          <p>
            Email : <a href="mailto:blaaup@example.com">blaaup@example.com</a>
          </p>
          <p>
            Téléphone : <a href="tel:+33000000000">+33 0 00 00 00 00</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
