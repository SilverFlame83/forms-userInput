import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const userInputRef = useRef();
  const [userName, setUserName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name input is valid!");
    }
  }, [nameIsValid]);

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = userInputRef.current.value;

    setNameIsTouched(true);

    if (userName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    console.log(userName);

    setUserName("");
  };

  const nameInputIsValid = !nameIsValid && nameIsTouched;

  const userInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={userInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={userInputRef}
          value={userName}
          onChange={nameHandler}
          type="text"
          id="name"
        />
        {nameIsValid && (
          <p className={"error-text"}>Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
