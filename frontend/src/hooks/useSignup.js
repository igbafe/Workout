import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const Signup = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    } else {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the authContext
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      setError(null);
    }
  };
  return { error, loading, Signup };
};
