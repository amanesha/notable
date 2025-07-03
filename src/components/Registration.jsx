import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notable from "../assets/notable.png";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
      setError("Email already registered");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      password,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Auto-login after registration
    const { password: _, ...userData } = newUser;
    localStorage.setItem("currentUser", JSON.stringify(userData));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-700 flex flex-col items-center justify-center px-4 py-8">
      {/* Registration Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6">
          {/* Logo Header Inside Form */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-55 h-22 ">
                {/* <span className="text-white text-xl font-bold">N</span> */}
                <img className="w-100 rounded-2xl" src={notable} alt="" />
              </div>
              {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notable</h1> */}
            </div>
            <h2 className="text-xl text-center  font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Create an account to join the community
            </h2>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm dark:bg-red-900/20 dark:text-red-200">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              {/* <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label> */}
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
              />
            </div>

            <div>
              {/* <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label> */}
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                minLength="6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              {/* <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label> */}
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="bg-gray-50 border mb-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* 
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div> */}

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create account
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
        © 2023 Notable. All rights reserved.
      </p>
    </div>
  );
};

export default Register;
