import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInputComponent";

const SignInComponent = () => {
  const [password, setPassword] = useState("");

  return (
    <form className="w-1/2">
      <h1 className="mb-5">Sign In</h1>
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        label="Password"
        name="password"
      />

      <div className="mb-5">
        <label htmlFor="unit" className="text-xs">
          Select Unit:
        </label>
        <select
          id="unit"
          required
          name="unit"
          className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <button className="w-full py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900">
        Sign In
      </button>

      <Link
        to="/"
        className="block mt-5 text-center underline underline-offset-3"
      >
        Back to Home
      </Link>
    </form>
  );
};

export default SignInComponent;
