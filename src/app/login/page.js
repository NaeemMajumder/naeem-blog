"use client";

import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";


const page = () => {
  let { user, setUser, handleError, signInUser } = useContext(AuthContext);
  let router = useRouter();

  const handleEmailLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    // Call signInUser to log in and handle the promise it returns
    signInUser(email, password)
      .then((currentUser) => {
        setUser(currentUser.user);  // After successful login, update user state
        alert("Login successful! Welcome back.");
        router.push("/");
      })
      .catch(handleError);  // Handle any error that occurs during login
  };

  return (
    <div>
      <form onSubmit={handleEmailLogin}>
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" type="password" />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default page;
