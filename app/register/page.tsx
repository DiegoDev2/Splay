// app/register/page.tsx

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Google from "@/public/register/google";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const PreRegister = () => {
  const [email, setEmail] = useState("");

  const handleGoogleLogin = async () => {
    try {
      // Inicia sesión con Google
      const res = await signIn("google", { redirect: false });
      if (res?.error) {
        console.log("Error de autenticación con Google:", res.error);
      } else {
        console.log("Autenticado con éxito");
      }
    } catch (error) {
      console.error("Hubo un error durante la autenticación de Google", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-gray-300">

      <div className="w-full md:w-1/2 flex flex-col justify-center px-16 bg-black">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-semibold text-indigo-400 mb-4">
            Pre Register
          </h1>

          <form className="space-y-4">

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
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
              >
                Pre Register
              </button>
            </div>
          </form>


          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="px-4 text-gray-400">Or continue with</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Google login button */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex-1 border border-gray-700 py-2 rounded-lg flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition"
            >
              <Google />
              <span className="ml-2 text-gray-300">Google</span>
            </button>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15} // Adjusted opacity to be low
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-y-0 left-0 w-1/2 h-full skew-y-12 -z-0", // Ensured it's only on the left
        )}
      />

      {/* Right section */}
      <div className="w-1/2 relative">
        <Image
          src="/ui/Streamer.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default PreRegister;

