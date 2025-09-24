import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../assets/screen-frame.svg";
import wallpaper from "../assets/wallpaper.svg";
import { toast } from "react-toastify";
import { loginUser } from "../redux/data/authOps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      navigate("/login");
    } else {
      toast.info("Please login");
    }
  }, [token, navigate]);
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const { email, password } = values;
      await dispatch(loginUser({ email, password })).unwrap();
      toast.success("Successful login");
      resetForm();
    } catch (e) {
      toast.error("Unsuccessful login" + e);
    } finally {
      setSubmitting(false);
      console.log("submitted");
    }
  };
  const validationLogin = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .min(6, "It has to be at least 6 characters")
      .max(29, "It can be at most 29 characters")
      .required("You have to enter your email"),
    password: Yup.string()
      .min(6, "It has to be at least 6 characters")
      .max(20, "It can be at most 20 characters")
      .required("You have to enter your password"),
  });

  return (
    <div className="grid grid-cols-2 gap-35 p-10">
      <div className="flex flex-col items-start justify-start p-5 relative">
        <p className="text-start absolute top-0 left-0 mb-10">READ JOURNEY</p>
        <div className="mt-20 flex gap-10 flex-col">
          <h1 className="text-start text-5xl font-semibold">
            Expand your mind, reading{" "}
            <span className="text-white/40">a book</span>
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationLogin}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-5">
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errormessage"
                />
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="errormessage"
                />
                <div className="flex flex-row justify-between mt-7">
                  <button
                    type="submit"
                    className="authbutton flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Logging in...
                      </span>
                    ) : (
                      "Login"
                    )}
                  </button>
                  <button type="button" onClick={() => navigate("/register")}>
                    Don't have an account ?
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="relative">
        <img
          src={frame}
          alt="frame"
          className="absolute top-1 right-0 rounded-3xl "
        />
        <img
          src={wallpaper}
          alt="wallpaper"
          className="absolute items-center top-6 right-5 md:h-155  rounded-4xl"
        />
      </div>
    </div>
  );
}
