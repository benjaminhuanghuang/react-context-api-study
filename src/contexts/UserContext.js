import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={"User Information"}>
      {props.children}
    </UserContext.Provider>
  )
};
 