import { useState } from "react";

const SimpleInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const isValid = userInput !=='';
  const nameInputIsInvalid = !isValid && enteredNameTouched;

  let userFormIsVlaid = false;

  if(isValid){
    userFormIsVlaid = true
  }

  const userIputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!isValid) {
      return;
    }
    setUserInput("");
    setEnteredNameTouched(false);
  };


  const inputFormClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button disabled={!userFormIsVlaid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
