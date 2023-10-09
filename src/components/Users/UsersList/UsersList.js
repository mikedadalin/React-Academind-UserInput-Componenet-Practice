import React, { useState } from "react";
import classes from "./UsersList.module.css";
import Card from "../../UI/Card/Card";

const UsersList = (props) => {
  if (props.users.length !== 0) {
    return (
      <Card CssClass={classes.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={Math.random().toString()}>
                {user.name} {user.age} years old.
              </li>
            );
          })}
        </ul>
      </Card>
    );
  } else {
    return;
  }
};

export default UsersList;
