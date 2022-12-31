import "./style.scss";

//TODO change access_key value with access key generated by site owner

const Contact = () => {
  return (
    <div className="pageContainerContact">
      <div className="contactForm">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="b882ae33-2bf3-47bf-a53d-ae1adf33c3b7"
          />
          <input
            type="hidden"
            name="from_name"
            value="TND Consulting contact form"
          />
          <input type="checkbox" name="botcheck" className="hidden" />
          <label htmlFor="email"> Adresse e-mail</label>
          <input type="email" name="email" required />
          <label htmlFor="First Name"> Prénom </label>
          <input type="text" name="First Name" required />
          <label htmlFor="Phone Number"> Numéro de téléphone </label>
          <input type="text" name="Phone Number" />
          <label htmlFor="message"> Votre message </label>
          <textarea name="message" required></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          <button className="button" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
