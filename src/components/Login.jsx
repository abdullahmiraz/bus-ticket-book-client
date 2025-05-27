import React, { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { loginWithEmail, googleSignIn } from "../lib/auth";

export default function Login() {
  // const { googleLog, signinEmailPass } = useContext(AuthContext);

  async function receive(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    try {
      const result = await loginWithEmail({ email, password });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(result.user.metadata.lastSignInTime);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Wrong Email & Password",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }

  async function handleGoogleLogin() {
    try {
      const result = await googleSignIn();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Google Sign-in Success!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(result.user);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to your account
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={receive} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink
            className="hover:text-pink-600 text-blue-500"
            to="/registration"
          >
            Registration
          </NavLink>
        </p>
      </div>
    </div>
  );
}
