import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import { useAuth } from "../lib/auth";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    // Restore agreement state if user has agreed or read terms
    const agreed = localStorage.getItem("samkiel_agreed") === "true";
    const read = localStorage.getItem("samkiel_read_terms") === "true";
    if (agreed || read) setAgreeToTerms(true);
  }, []);
  const { register, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update username for welcome message
    if (name === "username") {
      setUsername(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const read = localStorage.getItem("samkiel_read_terms") === "true"; // user actually visited terms

    if (!read) {
      toast.error("Abeg read the Terms & Conditions and Privacy Policy first.");
      return;
    }

    // ✅ WhatsApp number validation
    const phoneRegex = /^\+?\d{8,15}$/;
    if (!phoneRegex.test(formData.whatsappNumber)) {
      toast.error(
        "Please enter a valid WhatsApp number (only digits, 8–15 characters)."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const result = await register(formData);
      if (result) {
        toast.success(`🎉 Registration successful! Welcome ${result.username}`);
        // Clear all flags after successful registration
        localStorage.removeItem("samkiel_agreed");
        localStorage.removeItem("samkiel_clicked_terms");
        localStorage.removeItem("samkiel_read_terms");
        sessionStorage.removeItem("return_route");
      }
    } catch (error) {
      // Error is already handled in the register function
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <Head>
        <title>Register - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
      </Head>

      {/* Left side - Welcome section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6 transition-opacity duration-500">
            {username
              ? `${username}, we're glad to have you here!`
              : "Join the 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋 community!"}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create your account and start deploying bots with ease. Join
            thousands of developers already using our platform.
          </p>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
            <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse delay-100"></div>
            <div className="w-20 h-20 bg-white/10 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
        {/* Animated shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
      </div>

      {/* Right side - Register form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              Create your account
            </h2>
            <p className="text-gray-400">Fill in your details to get started</p>
            {/* Mobile welcome message */}
            <div className="lg:hidden mt-4">
              <h3 className="text-xl font-semibold text-white transition-opacity duration-500">
                {username
                  ? `${username}, we're glad to have you here!`
                  : "Join the 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋 community!"}
              </h3>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="whatsappNumber"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  WhatsApp Phone Number
                </label>
                <input
                  id="whatsappNumber"
                  name="whatsappNumber"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="+2348087357158"
                  value={formData.whatsappNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!/^[\d+]*$/.test(value)) {
                      toast.error(
                        "Na Only valid WhatsApp numbers dey allowed."
                      );
                      return;
                    }
                    handleChange(e);
                  }}
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-10 text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-10 text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Privacy Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => {
                  const newValue = e.target.checked;
                  setAgreeToTerms(newValue);
                  if (newValue) {
                    localStorage.setItem("samkiel_agreed", "true");
                  } else {
                    localStorage.removeItem("samkiel_agreed");
                  }
                }}
                className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                I agree to the{" "}
                <a
                  href="/terms"
                  onClick={(e) => {
                    // record intent and route, then navigate
                    sessionStorage.setItem("return_route", "register");
                    localStorage.setItem("samkiel_clicked_terms", "true");
                    // let the normal link proceed (no preventDefault)
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  onClick={(e) => {
                    // record intent and route, then navigate
                    sessionStorage.setItem("return_route", "register");
                    localStorage.setItem("samkiel_clicked_terms", "true");
                    // let the normal link proceed (no preventDefault)
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !agreeToTerms}
              className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                loading || !agreeToTerms ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="text-center">
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Already have an account? Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
