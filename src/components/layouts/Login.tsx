import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Eye, EyeOff, ChevronLeft} from "lucide-react";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleBack = () => navigate("/");
  const token = localStorage.getItem("token");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://api-smart.curaweda.com/api/login",
        {email, password},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (response.status === 200) {
        // Store token in localStorage
        localStorage.setItem("token", result.token); // Save token in localStorage

        // Check the role and navigate accordingly
        const {role} = result;
        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        setError(result.message || "An error occurred during login.");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <button
        onClick={handleBack}
        className="absolute z-20 text-white top-4 left-4"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <div className="flex-[1.7] bg-[#1E88E5] flex flex-col justify-center p-6 md:py-10 relative">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="flex flex-col -ml-8 md:max-w-3xl">
            <h1 className="ml-24 text-4xl font-semibold text-white md:text-8xl md:-mt-32">
              Welcome
            </h1>
            <p className="mt-4 ml-24 text-white text-md md:mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum earum fugit totam nemo fugiat eveniet quae eaque nam
              esse asperiores repellat at placeat, sint sit facilis libero
              magnam provident necessitatibus, similique mollitia itaque
              laborum? Magnam nesciunt illo veritatis, ipsum voluptatibus eum
              deleniti, deserunt consectetur exercitationem laudantium quidem
              voluptates cumque molestias?
            </p>
          </div>
        </div>
      </div>

      <div className="flex-[1] bg-[#CCCBCB] flex flex-col justify-center items-center p-6 lg:px-0 z-10 relative">
        <div className="bg-[#D9D9D9] rounded-3xl p-8 md:py-20 md:px-16 shadow-lg max-w-md w-full gap-y-10">
          <h2 className="text-6xl font-bold text-[#212121] mb-4">
            Login <br /> <span className="text-[#1E88E5]">Here!</span>
          </h2>
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {error && <div className="mb-4 text-sm text-red-500">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                <input
                  type="email"
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Type your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`w-full text-white p-2 rounded-xl mt-2 ${
                  loading ? "bg-gray-400" : "bg-[#1E88E5]"
                } ${loading ? "cursor-not-allowed" : ""}`}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
