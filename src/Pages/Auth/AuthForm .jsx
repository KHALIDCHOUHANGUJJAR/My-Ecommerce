/* eslint-disable react/prop-types */


import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "./FirebaseConfig.js";

import Swal from "sweetalert2";

import { UserContext } from "../../Context/Context.jsx";

const AuthForm = ({ formType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // signUp function
  const sigUpfun = (userDta) => {
    const { emailOrPhone, password, name } = userDta;
    setLoading(true);

    createUserWithEmailAndPassword(auth, emailOrPhone, password, name)
      .then((userCredential) => {
        const user = userCredential.user;

        const userData = { email: user.email, name: name };
        setUser(userData);
        toast.success("User successfully signed up!");
        reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // signIn function
  const SignInfun = (userDta) => {
    const { emailOrPhone, password, name } = userDta;
    setLoading(true);

    signInWithEmailAndPassword(auth, emailOrPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("You successfully logged in!");
        const userData = { email: user.email, name: name };
        setUser(userData);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // signUp with Google function
  const signUpwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userData = { email: user.email, name: user.displayName };
        setUser(userData);
        toast.success("Successfully signed up or signed in with Google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // onSubmit function
  const onSubmit = (data) => {
    if (formType === "signup") {
      sigUpfun(data);
    } else {
      SignInfun(data);
    }
  };

  // Forgot password function
  const ForgotFun = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
      confirmButtonText: "Submit",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: `Password reset email sent successfully to ${email}`,
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Email input is required!");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const isSignUp = formType === "signup";

  return (
    <div
      className={`flex min-h-screen items-center gap-[100px] bg-gray-100 ${
        isSignUp ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="hidden lg:block w-4/4 h-[100vh] object-cover">
        <img
          src="/public/Assets/images/Side Image.png"
          alt="Side Image"
          className="h-full object-cover"
        />
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900">
          {isSignUp ? "Create an account" : "Sign in to your account"}
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          {isSignUp
            ? "Enter your details below"
            : "Login with your email and password"}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isSignUp && (
            <div>
              <input
                type="text"
                {...register("name", { required: isSignUp })}
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
          )}

          <div>
            <input
              type="text"
              {...register("emailOrPhone", { required: true })}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.emailOrPhone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div>
            {isSignUp ? (
              <button
                type="submit"
                className="w-full py-3 flex items-center justify-center text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                disabled={loading}
              >
                {loading ? "Signing Up" : "Create Account"}
                {loading && <div className="loader ml-2"></div>}
              </button>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="py-2 px-6 text-white bg-red-500 rounded-md hover:bg-red-600 flex items-center focus:outline-none focus:ring focus:ring-red-200"
                  disabled={loading}
                >
                  {loading ? "Logging In" : "Log In"}
                  {loading && <div className="loader ml-2"></div>}
                </button>

                <h2
                  className="text-lg font-bold text-red-500 hover:underline cursor-pointer ml-4"
                  onClick={ForgotFun}
                >
                  Forget Password?
                </h2>
              </div>
            )}
          </div>

          <button
            onClick={signUpwithgoogle}
            type="button"
            className="w-full py-3 mt-4 border border-gray-300 rounded-md flex justify-center items-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Logo"
            />
            <span>
              {isSignUp ? "Sign up with Google" : "Sign in with Google"}
            </span>
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <NavLink
            className="font-medium text-indigo-600 hover:text-indigo-500"
            to={isSignUp ? "/signIn" : "/signup"}
          >
            {isSignUp ? "LOGIN" : "Create an Account"}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
