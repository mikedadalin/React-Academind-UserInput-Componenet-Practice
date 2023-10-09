import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  const closeErrorWindow = () => {
    props.onCloseError();
  };
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card CssClass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={closeErrorWindow}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
