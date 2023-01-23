import { useState } from "react";

const SimpleInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isValid = userInput !== "";
  const nameInputIsInvalid = !isValid && enteredNameTouched;


  const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailIsValid = emailInput.match(validEmail);

  const emailInputIsInvalid = !emailIsValid && enteredEmailTouched;

  let userFormIsVlaid = false;
  let emailFormIsValid = false;

  if (isValid && emailIsValid) {
    userFormIsVlaid = true;
    emailFormIsValid = true;
  }

  const userIputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const emailIputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!isValid || !emailIsValid) {
      return;
    }
    setUserInput("");
    setEnteredNameTouched(false);

    setEmailInput("");
    setEnteredEmailTouched(false);
  };

  const inputFormClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailFormClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputFormClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={userIputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={userInput}
        />
        {nameInputIsInvalid && (
          <p className="error-text">You can not submit empty form!</p>
        )}
      </div>
      <div className={emailFormClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailIputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailInput}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email is not valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!userFormIsVlaid && !emailFormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
