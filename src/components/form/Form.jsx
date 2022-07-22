import FormContainerStyled from "./Form.styled";
import "./form.css";

const Form = () => {
  return (
    <FormContainerStyled>
      <form
        action="https://formsubmit.co/7265072462068d9109d6921e8b5fac0f"
        method="POST"
      >
        <div className="input-area">
          <label className="form-label" htmlFor="name">
            your name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="input-area">
          <label className="form-label" htmlFor="email">
            your email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="input-area">
          <label className="form-label" htmlFor="mail-content">
            your message
          </label>
          <textarea
            className="form-text-area"
            type="textarea"
            id="mail-content"
            name="content"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Send
        </button>
      </form>
    </FormContainerStyled>
  );
};

export default Form;
