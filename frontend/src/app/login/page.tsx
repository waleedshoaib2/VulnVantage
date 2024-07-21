import Link from 'next/link';

export default function Login() {
  return (
    <div className="bg-custom-bg bg-cover min-h-screen  flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Login to HawkOps</h1>
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-red-600 rounded-lg">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="text-red-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
