// "use client";

// import { AuthContext } from "@/provider/AuthProvider";
// import { useContext } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const LoginPage = () => {
//   let { signInUser, handleError, setUser } = useContext(AuthContext);
//   let router = useRouter();

//   const handleEmailLogin = (event) => {
//     event.preventDefault();

//     let email = event.target.email.value;
//     let password = event.target.password.value;

//     signInUser(email, password)
//       .then((currentUser) => {
//         setUser(currentUser.user);  // After successful login, update user state
//         alert("Login successful! Welcome back.");
//         router.push("/");
//       })
//       .catch(handleError);  // Handle any error that occurs during login
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
//           <p className="text-gray-500">Please log in to continue</p>
//         </div>

//         <form onSubmit={handleEmailLogin} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Enter your email"
//               className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               placeholder="Enter your password"
//               className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input type="checkbox" id="remember" className="form-checkbox text-indigo-600" />
//               <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
//             </div>
//             <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
//           </div>

//           <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200">
//             Login
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">Don't have an account? <Link href="/register" className="text-indigo-600 hover:text-indigo-800">Sign Up</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
