import { useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext, authReducer } from "./AuthContext";
import type { AuthContextType } from "./types";

// PROPS INTERFACE FOR THE PROVIDER COMPONENT
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    unit: null,
  });

  useEffect(() => {
    const unit = localStorage.getItem("unit");

    if (unit) {
      dispatch({ type: "LOGIN", payload: unit });
    }
  }, []);

  console.log("AuthContext state: ", state);

  const contextValue: AuthContextType = {
    unit: state.unit,
    dispatch,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
