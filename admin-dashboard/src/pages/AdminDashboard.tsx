import React, { useEffect, useState } from 'react';
import UserDetailsModal from '../data/UserDetailsModal';
import axios from 'axios';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const adminToken = localStorage.getItem("token") // Replace with the actual token or fetch it securely

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:4000/api/admins/all-users', {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setUsers(response.data.users || []);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Update user status
  const handleUpdateStatus = async (userId: string, status: string) => {
    try {
      await axios.patch(
        `http://localhost:4000/api/admins/update-status/${userId}`,
        { status },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      // Update local state to reflect the change
      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? { ...user, subscription: { ...user.subscription, status } } : user))
      );
      alert(`User status updated to ${status}`);
    } catch {
      alert('Failed to update user status.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#002147] mb-4">Admin Dashboard</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="text-gray-600">No users found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition-colors"
          >
            <h3 className="text-lg font-bold">{user.firstName} {user.lastName}</h3>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600 capitalize">User Type: {user.userType}</p>
            <button
              onClick={() => setSelectedUser(user)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )} */}
    </div>
  );
};

export default AdminDashboard;
