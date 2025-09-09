import units from "../data/units.json";
import { getUnitIdByName } from "../functions/getUnitIdByName";
import { useAuthContext } from "./useAuthContext";

export const useUnitSignin = () => {
  const { dispatch } = useAuthContext();

  const signin = async (unitName: string, password: string) => {
    const unitId = getUnitIdByName(units, unitName);

    const response = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ unitId, password }),
    });

    const json = await response.json();

    if (response.ok) {
      // SAVE THE USER TO LOCAL STORAGE
      localStorage.setItem("unit", JSON.stringify(json));

      // UPDATE THE AUTH CONTEXT
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { signin };
};
