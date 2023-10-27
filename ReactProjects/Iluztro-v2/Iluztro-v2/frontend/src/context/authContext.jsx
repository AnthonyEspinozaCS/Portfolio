import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = async (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

function getLocalUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return { user: user };
  } else {
    return { user: null };
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, null, getLocalUser);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
