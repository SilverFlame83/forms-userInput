import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [userName, setUserName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const userInputRef = useRef();

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const userInput = userInputRef.current.value;
    
    if(userName.trim()===''){
      setNameIsValid(false)
      return;
    }
    console.log(userName);
    
    setUserName("");
  };

  const userInputClasses = nameIsValid? 'form-control' : 'form-control invalid';
  
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
      </div>
      {!nameIsValid && <p>Name must not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
