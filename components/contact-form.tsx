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
          className="border"
        />
        <input
          type="text"
          name="viewer-name"
          id="viewer-name"
          placeholder="Name"
          className="border"
        />
        <textarea name="message-content" id="message-content"></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
