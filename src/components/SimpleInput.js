import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const userInputRef = useRef();

  const userIputChangeHandler = (event) => {
    setUserInput(event.target.value);

  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (userInput.trim() === "") {
      setIsValid(false);
      return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userRef = userInputRef.current.value;

    setEnteredNameTouched(true);

    if (userInput.trim() === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true)
    setUserInput("");
  };

  const nameInputIsInvalid = !isValid && enteredNameTouched;

  const inputFormClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputFormClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={userInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
