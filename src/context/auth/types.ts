import type { Dispatch } from "react";

// DEFINE THE SHAPE OF OUR AUTH STATE
export interface AuthState {
  unit: string | null;
}

// DEFINE THE POSSIBLE ACTION TYPES
export type AuthAction =
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT" };

// DEFINE THE CONTEXT VALUE TYPE
export interface AuthContextType {
  unit: string | null;
  dispatch: Dispatch<AuthAction>;
}
