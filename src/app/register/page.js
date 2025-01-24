// "use client";

// import { AuthContext } from "@/provider/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useContext } from "react";

// const page = () => {
//   let { setUser, handleError, registerWithEmail, updateUserProfile } = useContext(AuthContext);
//   let router = useRouter();

//   const handleEmailRegister = (event) => {
//     event.preventDefault();

//     let form = event.target;
//     let name = form.name.value;
//     let photoUrl = form.photoUrl.value;
//     let email = form.email.value;
//     let password = form.password.value;

//     console.log(name, email, photoUrl, password);

//     registerWithEmail(email, password)
//       .then(result => {
//         setUser(result.user);
//         updateUserProfile({ displayName: name, photoURL: photoUrl })
//           .then(() => {
//             alert('Registration successful! Welcome aboard. Your account has been created, and you can now log in to start exploring.');
//             router.push("/");
//           }).catch(handleError);
//       }).catch(handleError);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Create Your Account</h2>

//         <form onSubmit={handleEmailRegister} className="space-y-4">
//           <input
//             name="name"
//             type="text"
//             placeholder="Full Name"
//             required
//             className="input input-bordered w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400"
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             required
//             className="input input-bordered w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400"
//           />
//           <input
//             name="photoUrl"
//             type="url"
//             placeholder="Profile Photo URL (Optional)"
//             className="input input-bordered w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             required
//             className="input input-bordered w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400"
//           />
//           <button
//             type="submit"
//             className="btn w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500">
//             Already have an account?{' '}
//             <a href="/login" className="text-indigo-600 hover:text-indigo-800">
//               Login here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
