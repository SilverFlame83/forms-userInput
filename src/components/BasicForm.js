import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirsrtName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  let userFormIsValid = false;

  if (enteredFirstNameIsValid) {
    userFormIsValid(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredFirsrtName) {
      return;
    }

    resetFirstNameInput();
  };

  const firstNameClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirsrtName}
          />
          {firstNameInputHasError && <p className="error-text">Please enter first name!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
