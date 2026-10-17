
import React, { useState } from "react";
import car from "../assets/car.png";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "car3330";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setError("");
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D172B] p-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-[#D6AE58]/30 bg-[#152238] p-6 shadow-2xl sm:p-8">

        {/* Lock Icon */}
        <div className="mb-6 flex justify-center"> 
            <img src={car} className="h-20"/>
        </div>

        {/* Heading */}
        <h1 className="text-center text-2xl font-bold">
          Shree Shyam
        </h1>

        <p className="mt-2 text-center text-sm tracking-widest text-[#D6AE58]">
          TOUR AND TRAVELS
        </p>

        <p className="mt-6 text-center text-sm text-gray-400">
          Enter your password to access the dashboard.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <label className="mb-2 block text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter password"
            className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none transition focus:border-[#D6AE58]"
            required
          />

          {/* Error Message */}
          {error && (
            <p className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#D6AE58] p-3 font-semibold text-[#0D172B] transition hover:bg-[#e5c477]"
          >
            Unlock Dashboard
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Authorized access only
        </p>
      </div>
    </div>
  );
};

export default Login;
