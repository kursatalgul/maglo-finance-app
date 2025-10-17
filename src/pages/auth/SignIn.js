import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getFieldError } from "../../utils/validation";
import heroImage from "../../images/Image.png";
import logoImage from "../../images/maglo.svg";
import underlineImage from "../../images/signinvector.svg";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      window.location.href = "/dashboard";
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    newErrors.email = getFieldError("email", formData.email);
    newErrors.password = getFieldError("password", formData.password);

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await login(formData.email, formData.password);
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col lg:justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12 lg:pl-[135px]">
        {/* Logo */}
        <div className="absolute top-[40px] left-0 lg:left-[183px] flex items-center gap-3 pt-[4px] lg:mb-12">
          <img src={logoImage} alt="Maglo Logo" className="w-[30px] h-[30px]" />
          <span className="font-['Gordita'] font-bold text-lg text-[#1a1a1a]">
            Maglo.
          </span>
        </div>

        {/* Form Container */}
        <div className="w-full justify-center items-center  max-w-md mx-auto lg:mx-0 lg:max-w-lg lg:ml-[135px]">
          <div className="mb-8">
            <h2 className="font-['Kumbh_Sans'] font-semibold text-[30px] leading-[100%] text-[#1a1a1a] mb-2">
              Sign In
            </h2>
            <p className="font-['Kumbh_Sans'] font-normal text-[16px] leading-[100%] text-[#78778B]">
              Welcome back! Please enter your details
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`block w-full h-12 px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100" : "bg-white"}`}
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`block w-full h-12 px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100" : "bg-white"}`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                variant="primary"
                size="custom"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="w-full h-12"
              >
                Sign In
              </Button>

              <button
                type="button"
                className="w-full h-12 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  Sign in with Google
                </span>
              </button>
            </div>

            <div className="text-center">
              <p className="font-['Kumbh_Sans'] font-normal text-sm text-gray-600">
                Don't have an account?
                <span className="inline-block">
                  <Link
                    to="/auth/signup"
                    className="text-black hover:text-gray-800 cursor-pointer font-['Kumbh_Sans'] font-normal text-sm ml-1"
                  >
                    Sign up
                  </Link>
                  <img
                    src={underlineImage}
                    alt="Underline"
                    className="w-[43px] h-[5px] mx-auto mt-0.5"
                  />
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:flex lg:flex-1 bg-white relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
