import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return { user: action.payload };
    case "LOGOUT":
      console.log(action.payload);
      return { user: null };
    default:
      return state;
  }
};

function getLocalUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return { user: null };
  }

  return { user: user };
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, null, getLocalUser);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
