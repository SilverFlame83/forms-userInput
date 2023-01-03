import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [firstName, setFirstName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);


  const userRefInput = useRef();

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = userRefInput.current.value;
    
    if(firstName.trim() === ""){
      setNameIsValid(false)
      return;
    }
    console.log(firstName);

  };

  const userFormClasses = nameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={userFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={userRefInput} onChange={firstNameHandler} type='text' id='name' />
      </div>
      {!nameIsValid && <p>Name must not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
