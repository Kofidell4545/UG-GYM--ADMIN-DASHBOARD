import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch("http://localhost:4000/api/admins/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
        setIsLoading(false)
        return;
      }

      const data = await response.json();
      localStorage.setItem("adminToken", data.token) // save token to local storge
      navigate("/admin-dashboard") // redirect if login successfull
    } catch (error) {
      setError("An error occured while loggin. Please try again")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-[#002147] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-lg shadow-2xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-[#002147] text-center mb-4">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-[#002147]"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter admin email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-[#002147]"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value )
              }
              placeholder="Enter admin password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-[#002147] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#003167] transition-colors ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Login to access the admin dashboard
        </p>
      </form>
    </div>
  );
}
