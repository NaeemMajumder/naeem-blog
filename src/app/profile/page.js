// "use client"

// import { AuthContext } from "@/provider/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect } from "react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async() => {

    const {isAuthenticated, getUser} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser()
    console.log(isUserAuthenticated);
    console.log(user);

    if(!user){
        redirect("/");
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-400 py-12">
      <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-xl transform transition-all hover:scale-105 duration-300">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold text-gray-800">Welcome, {user ? user.given_name : 'Loading...'}</h1>
          <p className="text-gray-600 mt-2 text-lg">Welcome to your profile!</p>
        </div>

        <div className="space-y-8">
          {/* User Info Section */}
          <div className="text-center">
            <div className="card bg-base-100 shadow-xl rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Information</h2>
              <p className="text-gray-600 text-xl mb-2">Name: <span className="font-medium">{user ? user.given_name : 'Loading...'}</span></p>
              <p className="text-gray-600 text-xl mb-2">Email: <span className="font-medium">{user ? user.email : 'Loading...'}</span></p>
            </div>
          </div>

          {/* Profile Summary Section */}
          <div className="text-center">
            <div className="card bg-base-100 shadow-xl rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">About You</h2>
              <p className="text-gray-700 text-lg">{user ? user.bio : 'No bio available.'}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button className="btn btn-primary w-full md:w-3/4 py-3 mt-6 text-lg rounded-xl hover:bg-indigo-600 transition duration-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
