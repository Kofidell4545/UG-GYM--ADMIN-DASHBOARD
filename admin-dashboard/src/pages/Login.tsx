import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#002147]">UG GYM Admin Portal</h1>
          <p className="text-gray-600 mt-2">Please login to access the admin dashboard</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}