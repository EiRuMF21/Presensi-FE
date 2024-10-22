import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundSvg from "/public/image/register.svg";
import backgroundLogSvg from "/public/image/log.svg";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Submit the form data to the backend
      const response = await axios.post(
        "https://api-smart.curaweda.com/api/accounts",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      console.log("Account created:", response.data);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to create account");
      } else {
        console.error("Error creating account:", (err as Error).message);
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 z-20 text-white"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <div className="flex-[1.7] bg-[#1E88E5] flex flex-col justify-center p-6 md:py-10 relative">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="flex flex-col -ml-8 md:max-w-3xl">
            <h1 className="ml-24 text-4xl font-semibold text-white md:text-8xl md:-mt-32">
              Welcome
            </h1>
            <p className="mt-4 ml-24 text-white text-md md:mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptatem et facilis eveniet distinctio totam nemo
              vero, ullam repellat voluptate minima doloribus soluta accusantium
              eius error! Sed, eum perferendis doloremque a et eaque earum nemo
              commodi similique, consequatur vitae culpa quisquam praesentium
              aperiam? Laudantium nulla consequuntur quidem labore accusamus a!
            </p>
          </div>
          <div className="absolute md:-top-52 md:right-52">
            <div
              style={{ backgroundImage: `url(${backgroundLogSvg})` }}
              className="w-[100px] h-[100px] lg:w-[250px] lg:h-[200px] object-contain"
            ></div>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full bg-left-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundSvg})` }}
        ></div>
      </div>
      <div className="flex-[1] bg-[#CCCBCB] flex flex-col justify-center items-center p-6 lg:px-0 z-10 relative">
        <div className="bg-[#D9D9D9] rounded-3xl p-8 md:py-20 md:px-16 shadow-lg max-w-md w-full gap-y-10">
          <div className="w-full">
            <h2 className="text-6xl font-bold text-[#212121] mb-8">
              Register <br /> <span className="text-[#1E88E5]">Here!</span>
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-5 w-80 h-96" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Type your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Type your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="border-b-[3px] border-black focus-within:border-[#1E88E5] flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Type your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="border-b-[3px] border-black focus-within:border-[#1E88E5] flex items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1E88E5] text-white p-3 rounded-xl mt-4 hover:bg-[#1976D2] transition-colors duration-300"
                >
                  Register
                </button>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-[#1E88E5] hover:underline">
                    Click here
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
