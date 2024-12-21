"use client";

import Github from "@/public/register/github";
import Google from "@/public/register/google";
import Twitch from "@/public/register/twitch";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { supabase } from "@/lib/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;

      setIsSubmitted(true);
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-gray-300 relative">
      {/* Left section */}
      <div className="w-1/2 flex flex-col justify-center px-16 relative z-10">
        <AnimatedGridPattern
          className="absolute inset-0 z-[-1] opacity-10"

        />
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-semibold text-indigo-400 mb-4">
            Pre Register
          </h1>

          {!isSubmitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Pre Register button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                  Pre Register
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-lg font-medium text-gray-400 mt-6">
              <p>Thank you for pre-registering!</p>
              <p>We’ll notify you via email when Vyx is available.</p>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="px-4 text-gray-400">Or continue with</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Social login buttons */}
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 border border-gray-700 py-2 rounded-lg flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition"
              onClick={() => signIn("google")}
            >
              <Google />
              <span className="ml-2 text-gray-300">Google</span>
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-700 py-2 rounded-lg flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition"
              onClick={() => signIn("github")}
            >
              <Github />
              <span className="ml-2 text-gray-300">GitHub</span>
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-700 py-2 rounded-lg flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition"
            >
              <Twitch />
              <span className="ml-2 text-gray-300">Twitch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 relative">
        <Image
          src="/ui/Streamer.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Register;

