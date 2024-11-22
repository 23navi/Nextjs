import classes from "./newsletter-registration.module.css";
import axios from "axios";
import { useRef } from "react";

function NewsletterRegistration() {
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    const email = emailRef.current.value;
    emailRef.current.value = "";

    // send valid data to API
    axios.post("/api/newsletters", { email });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
