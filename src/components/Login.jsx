import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notable from "../assets/notable.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    //const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log({ email: email, password: password });

    // Find user by email
    //const user = users.find(user => user.email === email);
    const user = true;

    if (!user) {
      setError("No account found with this email");
      return;
    }

    // if (user.password !== password) {
    //   setError("Incorrect password");
    //   return;
    // }

    // Store user session (without password)
    const { password: _, ...userData } = user;
    localStorage.setItem("currentUser", JSON.stringify(userData));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-700 flex flex-col items-center justify-center px-4 py-8">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6">
          {/* Logo Header - Horizontal Layout */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-55 h-22  ">
              {/* <span className="text-white text-xl font-bold">N</span> */}
              <img className="w-100 rounded-2xl" src={notable} alt="" />
            </div>
          </div>

          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white text-center">
            Sign in to your account
          </h2>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm dark:bg-red-900/20 dark:text-red-200">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              {/* <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label> */}
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div>
              {/* <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                {/* <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div> */}
              </div>
              <Link
                to="/forgotPassword"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Notable. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
