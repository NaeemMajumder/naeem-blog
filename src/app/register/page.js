"use client";

import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

const page = () => {
  let { user, setUser, handleError, signInUser } = useContext(AuthContext);

  const handleEmailLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    // Call signInUser to log in and handle the promise it returns
    signInUser(email, password)
      .then((currentUser) => {
        setUser(currentUser.user);  // After successful login, update user state
        alert("Login successful! Welcome back.");
      })
      .catch(handleError);  // Handle any error that occurs during login
  };

  return (
    <div>
      <form onSubmit={handleEmailLogin}>
        <input placeholder="username" name="username" />
        <input placeholder="email" name="email" />
        <input placeholder="photoUrl" name="photoUrl" />
        <input placeholder="password" name="password" type="password" />
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default page;
