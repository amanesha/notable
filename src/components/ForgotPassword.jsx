import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notable from '../assets/notable.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // 1 = email step, 2 = reset step
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email exists
    const userExists = users.some((user) => user.email === email);

    if (!userExists) {
      setError("No account found with that email");
      return;
    }

    // Move to password reset step
    setStep(2);
    setError("");
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user and update password
    const updatedUsers = users.map((user) => {
      if (user.email === email) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    // Save updated users
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Show success message
    setSuccess("Password updated successfully");
    setError("");

    // Redirect to login after delay
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-700 flex flex-col items-center justify-center px-4 py-8">
      {/* Password Reset Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6">
          {/* Logo Header Inside Form */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-55 h-22 ">
                {/* <span className="text-white text-xl font-bold">N</span> */}
                <img className="w-100 rounded-2xl" src={notable} alt="" />
              </div>
              {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Notable
              </h1> */}
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white text-center">
              {step === 1 ? "Reset your password" : "Create new password"}
            </h2>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm dark:bg-red-900/20 dark:text-red-200">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm dark:bg-green-900/20 dark:text-green-200">
              {success}
            </div>
          )}

          {step === 1 ? (
            <form className="space-y-4" onSubmit={handleEmailSubmit}>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Enter your email address and we'll send you instructions to
                reset your password.
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continue
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                <Link
                  to="/"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handlePasswordReset}>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Create a new password for{" "}
                <span className="font-medium">{email}</span>
              </p>
              <div>
                <label
                  htmlFor="new-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  minLength="6"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
        © 2023 Notable. All rights reserved.
      </p>
    </div>
  );
};

export default ForgotPassword;
