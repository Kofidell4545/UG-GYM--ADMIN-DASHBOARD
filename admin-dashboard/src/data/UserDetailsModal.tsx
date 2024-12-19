import React from 'react';
import { X } from 'lucide-react';

// Define the props for UserDetailsModal

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ user, onClose, onUpdateStatus }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#002147]">User Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-lg text-gray-900">{user.firstName} {user.lastName}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">User Type</h3>
                <p className="mt-1 text-lg text-gray-900 capitalize">{user.userType}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-lg text-gray-900">{user.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="mt-1 text-lg text-gray-900">{user.phone}</p>
              </div>
              {user.universityId && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">University ID</h3>
                  <p className="mt-1 text-lg text-gray-900">{user.universityId}</p>
                </div>
              )}
              {user.hallOfResidence && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Hall of Residence</h3>
                  <p className="mt-1 text-lg text-gray-900">{user.hallOfResidence}</p>
                </div>
              )}
              {user.department && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Department</h3>
                  <p className="mt-1 text-lg text-gray-900">{user.department}</p>
                </div>
              )}
            </div>

            {user.medicalCondition && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-yellow-800">Medical Condition</h3>
                <p className="mt-1 text-yellow-700">{user.medicalCondition}</p>
              </div>
            )}

            {user.subscription && (
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-[#002147] mb-3">Subscription Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Plan</h4>
                    <p className="mt-1 text-gray-900 capitalize">{user.subscription.startDate} Plan</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Price</h4>
                    <p className="mt-1 text-gray-900">GH₵{user.subscription.price}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Start Date</h4>
                    <p className="mt-1 text-gray-900">
                      {new Date(user.subscription.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">End Date</h4>
                    <p className="mt-1 text-gray-900">
                      {new Date(user.subscription.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <h3 className="text-lg font-medium text-[#002147] mb-3">Update Status</h3>
              <div className="flex space-x-3">
                <button
                  onClick={() => onUpdateStatus(user.id, 'approved')}
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors"
                >
                  Mark as Paid
                </button>
                <button
                  onClick={() => onUpdateStatus(user.id, 'on-hold')}
                  className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
                >
                  Put on Hold
                </button>
                <button
                  onClick={() => onUpdateStatus(user.id, 'pending')}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Mark as Pending
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;