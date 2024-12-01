const ContactForm = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <input
          type="email"
          name="viewer-email"
          id="viewer-email"
          placeholder="Email"
        />
        <input
          type="text"
          name="viewer-name"
          id="viewer-name"
          placeholder="Name"
        />
        <textarea name="message-content" id="message-content"></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
