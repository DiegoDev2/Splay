// pages/register.tsx
import { IconBrandGoogle } from '@tabler/icons-react';
import { Github } from 'lucide-react';
import Image from 'next/image';

const Register = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col justify-center px-12 bg-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Create your account</h1>
          <p className="text-gray-500 mb-6">
            Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 border border-gray-300 py-2 rounded-lg flex justify-center items-center hover:bg-gray-100 transition"
            >
              <IconBrandGoogle />
              Google
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-300 py-2 rounded-lg flex justify-center items-center hover:bg-gray-100 transition"
            >
              <Github />
              GitHub
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <Image
          src="/ui/Streamer.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Register;
