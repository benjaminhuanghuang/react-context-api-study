import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    isAuthed: false
  });

  return <AuthContext.Provider value={[isAuthed, setIsAuthed]}>{props.children}</AuthContext.Provider>;
};
