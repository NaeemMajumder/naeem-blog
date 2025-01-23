"use client";

import { AuthContext } from "@/provider/AuthProvider";
import { useRouter } from "next/router";
import { useContext } from "react";

const page = () => {
  let { user, setUser, handleError, registerWithEmail, updateUserProfile } = useContext(AuthContext);
  let router = useRouter();

  const handleEmailRegister= (event) => {
    event.preventDefault();

    let form = event.target;
    let name = form.name.value;
    let photoUrl = form.photoUrl.value;
    let email = form.email.value;
    let password = form.password.value;

    console.log(name, email, photoUrl, password)

    registerWithEmail(email, password)
    .then(result=>{
      setUser(result.user);
      updateUserProfile({ displayName: name, photoURL: photoUrl })
      .then(()=>{
        alert('Registration successful! Welcome aboard. Your account has been created, and you can now log in to start exploring.'); 
        router.push("/")
      }).catch(handleError)
    }).catch(handleError)
  };

  return (
    <div>
      <form onSubmit={handleEmailRegister}>
        <input placeholder="name" name="name" />
        <input placeholder="email" name="email" />
        <input placeholder="photoUrl" name="photoUrl" />
        <input placeholder="password" name="password" type="password" />
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default page;
