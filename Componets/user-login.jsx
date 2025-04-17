"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import userLogo from "../public/logo.png";
import GoogleIcon from "../public/google-icon.png";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const UserLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  const [signUpUserData, setSignUpUserData] = useState({
    email: "",
    password: "",
  });

  const {
    user,
    handleSignInWithGoogle,
    handleLogout,
    isLoading,
    signUp,
    logIn,
  } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(loginUserData.email, loginUserData.password);
      setShowModal(false);
    } catch (error) {
      toast.error("Invalid credentials. Please check.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(signUpUserData.email, signUpUserData.password);
      setShowModal(false);
    } catch (error) {
      toast.error("Invalid credentials. Please check.");
    }
  };

  if (user) {
    return (
      <div className="relative">
        <button
          className="w-10 h-10 rounded-full overflow-hidden border"
          onClick={() => setShowModal(!showModal)}
        >
          <img
            src={user?.photoURL || userLogo.src}
            alt="User"
            className="w-full h-full object-cover"
          />
        </button>

        {showModal && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-5">
            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
              <FaEnvelope className="text-gray-600 h-5 w-5" />
              <span className="text-sm text-gray-800 font-medium truncate">
                {user?.email}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm font-semibold bg-red-500 text-white hover:bg-red-600 rounded-b-lg transition duration-200"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-nowrap"
      >
        Sign Up
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-[#000000b8]  z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setActiveTab("login")}
                className={`w-1/2 py-2 font-medium border-b-2 ${
                  activeTab === "login"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("sign-up")}
                className={`w-1/2 py-2 font-medium border-b-2 ${
                  activeTab === "sign-up"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {activeTab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  required
                  type="email"
                  className="w-full border px-4 py-3 rounded"
                  placeholder="Email"
                  value={loginUserData.email}
                  onChange={(e) =>
                    setLoginUserData({
                      ...loginUserData,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  required
                  type="password"
                  className="w-full border px-4 py-3 rounded"
                  placeholder="Password"
                  value={loginUserData.password}
                  onChange={(e) =>
                    setLoginUserData({
                      ...loginUserData,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                >
                  Login
                </button>
              </form>
            )}

            {activeTab === "sign-up" && (
              <form onSubmit={handleSignUp} className="space-y-4">
                <input
                  required
                  type="email"
                  className="w-full border px-4 py-3 rounded"
                  placeholder="Email"
                  value={signUpUserData.email}
                  onChange={(e) =>
                    setSignUpUserData({
                      ...signUpUserData,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  required
                  type="password"
                  className="w-full border px-4 py-3 rounded"
                  placeholder="Password"
                  value={signUpUserData.password}
                  onChange={(e) =>
                    setSignUpUserData({
                      ...signUpUserData,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
                >
                  Sign Up
                </button>
              </form>
            )}

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              onClick={handleSignInWithGoogle}
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded bg-[#4382F3] text-white ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              <img
                src={GoogleIcon.src}
                alt="Google Icon"
                className="w-6 h-6 bg-white p-1 rounded"
              />
              Continue with Google
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserLogin;
