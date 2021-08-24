import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Email State
  const [isEmailState, setEmailState] = useState(false); // --> false by default, nothing is displayed.
  const [displayEmailError, setDisplayEmailError] = useState(false);
  // Message State
  // const [isMessageState, setMessageState] = useState(false);
  // const [displayMessageError, setDisplayMessageError] = useState(false);


  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {

      setEmailState(true);
      setDisplayEmailError(false)
    } else {


      //setTimeout is used here to allow the user to see, with each click on the button to submit the form, the animation of the error message. 
      //   setTimeout(() => {
      //     mail.style.animation = 'none';
      //   }, 1000)

      setEmailState(false);
      setDisplayEmailError(true)

    }
  }

  // const isMessage = () => {
  //   let regex = /^[a-zA-Z0-9._-]$/;

  //   if (message.match(regex)) {

  //     setMessageState(true);
  //     setDisplayMessageError(false)

  //   } else {

  //     setMessageState(false);
  //     setDisplayMessageError(true)
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setState
    isEmail();
    // isMessage();
    if (name && !isEmailState && message) {
      sendFeedback("template_5dpr8xr", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      console.log('error : name, email or message are not completed');
    }

  };
  const sendFeedback = (templateId, variables) => {

    window.emailjs
      // in send method, "GmailServiceID" = id of the service fundable on emailJS website
      .send("GmailServiceID", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          setError("Une erreur s'est produite, veuillez réessayer."))
  };

  return (
    <div className="contact">
      <div className="contact__maintitle">
        <h1 className="contact__maintitle__title">Contact</h1>
        <h2 className="contact__maintitle__subtitle">Vos coordonnées</h2>
      </div>
      <form className="contact__form" action="">
        <div className="contact__form__section">
          <label className="contact__form__section__label" htmlFor="name">Votre nom *</label>
          <input
            className="contact__form__section__input"
            type="text"
            name="name"
            id="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
            autoComplete="off"
          />
        </div>
        <div className="contact__form__section">
          <label className="contact__form__section__label" htmlFor="company">Votre société</label>
          <input
            className="contact__form__section__input"
            type="text"
            name="company"
            id="company"
            onChange={(event) => setCompany(event.target.value)}
            value={company}
            autoComplete="off"
          />
        </div>
        <div className="contact__form__section">
          <label className="contact__form__section__label" htmlFor="phone">Votre téléphone</label>
          <input
            className="contact__form__section__input"
            type="text"
            name="phone"
            id="phone"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            autoComplete="off"
          />
        </div>
        <div className="contact__form__section">
          <label className="contact__form__section__label" htmlFor="email">Votre e-mail *</label>
          <input
            className="contact__form__section__input"
            type="email"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            autoComplete="off"
          />
        </div>
        < div className={
          displayEmailError ? "not-mail" : "toto"
        }
          style={
            displayEmailError ? {
              display: "block", animation: "dongle 1s"
            } : {
              display: "none"
            }
          } > Email non valide</div>
        <div className="contact__form__section contact__form__section__custom">
          <label className="contact__form__section__label" htmlFor="message">Votre message *</label>
          <textarea
            className="contact__form__section__textarea"
            name="message"
            id="message"
            cols="30" rows="10"
            placeholder="Taper ici votre message pour plus d'informations..."
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
        </div>
        < div className={
          displayEmailError ? "not-mail" : "toto"
        }
          style={
            displayEmailError ? {
              display: "block", animation: "dongle 1s"
            } : {
              display: "none"
            }
          } > Message non rempli</div>
        <div className="contact__form__section">
          <button
            className="contact__form__section__button"
            type="submit"
            onClick={handleSubmit}
          >Valider</button>
        </div>
        {/* 
                    Condition for displaying the error. Explanation:
                     error && error means if :
                    error exist (the first one) --> (error && error)
                    then = && --> (error && error)
                    use the second error here (who is the same that the first one) --> (error && error) 
                    */}
        <div className="form-message">{error && error}</div>
      </form>
    </div>
  );
};

export default Contact;