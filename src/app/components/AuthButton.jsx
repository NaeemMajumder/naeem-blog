// "use client";

// import { AuthContext } from "@/provider/AuthProvider";
// import Link from "next/link";
// import { useContext } from "react";

// const AuthButton = () => {
//   let { user, setUser, signoutUser, handleError } = useContext(AuthContext);
//   console.log(AuthContext);

//   let handleLogOut = () => {
//     signoutUser()
//       .then(() => {
//         setUser(null);
//         alert("logout successful");
//       })
//       .catch(handleError);
//   };

//   return (
//     <>
//       <div className="navbar-end gap-4">
//         {user?.email ? (
//           <button onClick={handleLogOut} className="btn">
//             LogOut
//           </button>
//         ) : (
//           <>
//             <Link href="/login">
//               <button className="btn">Login</button>
//             </Link>
//             <Link href="/register">
//               <button className="btn">Register</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default AuthButton;
