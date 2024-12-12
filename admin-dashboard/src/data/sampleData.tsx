export const sampleUsers = {
    'admin@ug.edu.gh': {
      id: 'admin1',
      name: 'Admin User',
      email: 'admin@ug.edu.gh',
      userType: 'admin',
      password: 'admin123',
    },
    'student123': {
      id: 'u1',
      name: 'Nsroma Arhin',
      email: 'john@ug.edu.gh',
      userType: 'student',
      password: 'password123',
      subscription: {
        id: 's1',
        userId: 'u1',
        duration: 'monthly', // Change to 'monthly' to represent 30 days
        startDate: '2024-11-01', // Adjust this date to today or a valid past date
        endDate: '2024-11-30', // Add 30 days to the start date
        status: 'approved',
        price: 30, // Price for the subscription
      },
    },
    'staff456': {
      id: 'u2',
      name: 'Jane Smith',
      email: 'jane@ug.edu.gh',
      userType: 'staff',
      password: 'password123',
      subscription: {
        id: 's2',
        userId: 'u2',
        duration: 'monthly',
        startDate: '2024-10-15', // Set a valid past start date
        endDate: '2024-11-14', // Set a 30-day range
        status: 'expired', // Expired subscription status
        price: 30,
      },
    },
    'john.public@gmail.com': {
      id: 'u3',
      name: 'Mike Johnson',
      email: 'john.public@gmail.com',
      userType: 'public',
      password: 'password123',
    },
  };
  export {};