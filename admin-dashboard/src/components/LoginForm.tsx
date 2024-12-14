import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    console.log("Submitted Email:", formData.email);
    console.log("Submitted Password:", formData.password);

    // Admin credentials verification
    if (formData.email === 'adminkofi@st.ug.edu.gh' && formData.password === '252628') {
      console.log("Credentials matched. Logging in...");

      // Create admin user object
      const adminUser = {
        id: 'admin1',
        name: 'Admin User',
        email: formData.email,
        userType: 'admin',
      };

      // Store admin data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      console.log("User stored in localStorage:", adminUser);

      // Navigate to admin dashboard
      navigate('/admin-dashboard');
      return;
    }

    console.log("Invalid credentials.");
    setError('Invalid credentials. Please try again.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-[#002147] px-4">
      <form
        onSubmit={handleSubmit}
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter admin password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#002147] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#003167] transition-colors"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Login to access the admin dashboard
        </p>
      </form>
    </div>
  );
}
