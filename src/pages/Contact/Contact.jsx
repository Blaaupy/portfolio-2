import { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Contact.scss";

export default function Contact() {
  const { texts } = useContext(LanguageContext);

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
    setTimeout(() => setSuccess(false), 5000); // fait disparaître le message après 5s
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
        <h1>{texts.contact.title}</h1>
        <p>{texts.contact.text}</p>
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
            placeholder={texts.contact.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={texts.contact.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
            pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
          />
          <textarea
            name="message"
            placeholder={texts.contact.messagePlaceholder}
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn">
            {texts.contact.submitBtn}
          </button>
          {success && <p className="success-msg">{texts.contact.successMsg}</p>}
        </form>

        <div className="contact-info fade-up" ref={infoRef}>
          <h3>{texts.contact.infoTitle}</h3>
          <p>
            {texts.contact.emailLabel} :{" "}
            <a href="mailto:blaaup@example.com">blaaup@example.com</a>
          </p>
          <p>
            {texts.contact.phoneLabel} :{" "}
            <a href="tel:+33000000000">+33 0 00 00 00 00</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
