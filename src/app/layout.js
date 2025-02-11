import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naeem Blog",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log(isUserAuthenticated);
  console.log(user);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1350px] mx-auto`}
      >
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="btn btn-ghost text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <Link href={"/"}>Naeem Blog</Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              <li className="hover:text-indigo-600 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-indigo-600 transition">
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          {/* buttons */}
          <div className="navbar-end gap-4">
            {user?.email ? (
              <LogoutLink className="btn bg-red-500">LogOut</LogoutLink>
            ) : (
              <>
                <LoginLink className="btn bg-blue-500">Login</LoginLink>
                <RegisterLink className="btn bg-blue-500">
                  Register
                </RegisterLink>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="footer bg-base-200 text-base-content p-10 mt-10 space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-10 text-sm">
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current text-indigo-600"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p className="text-indigo-700 font-semibold text-3xl">Naeem Blog</p>
          </div>
          <nav className="space-y-4">
            <h6 className="footer-title text-lg text-indigo-700">Services</h6>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Branding
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Design
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Marketing
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Advertisement
            </a>
          </nav>
          <nav className="space-y-4">
            <h6 className="footer-title text-lg text-indigo-700">Company</h6>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              About us
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Contact
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Jobs
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Press kit
            </a>
          </nav>
          <nav className="space-y-4">
            <h6 className="footer-title text-lg text-indigo-700">Legal</h6>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Terms of use
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Privacy policy
            </a>
            <a className="link link-hover text-gray-600 hover:text-indigo-600">
              Cookie policy
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
