import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const closeErrorWindowHandler = () => {
    setHasError(false);
    setErrorMsg("");
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length == 0) {
      setHasError(true);
      setErrorMsg("There is an empty Username!");
    } else if (+enteredAge < 1) {
      setHasError(true);
      setErrorMsg("The age can not be less than 1!");
    }
    props.onAddNewUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const enteredUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      {hasError && (
        <ErrorModal
          title="An error happened!"
          message={errorMsg}
          onCloseError={closeErrorWindowHandler}
        />
      )}

      <Card CssClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={enteredUserNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={enteredAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
