import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enterdName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [emailInput, setEmailInput] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailIsValid = emailInput.match(validEmail);

  const emailInputIsInvalid = !emailIsValid && enteredEmailTouched;

  let userFormIsVlaid = false;

  if (enteredNameIsValid && emailIsValid) {
    userFormIsVlaid = true;
  }

  const emailIputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !emailIsValid) {
      return;
    }

    resetNameInput();

    setEmailInput("");
    setEnteredEmailTouched(false);
  };

  const inputFormClasses = nameInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enterdName}
        />
        {nameInputHasError && (
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
        {/* <button disabled={!userFormIsVlaid && !emailFormIsValid}>Submit</button> */}
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
