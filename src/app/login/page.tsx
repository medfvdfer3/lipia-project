"use client";

import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const { setUser } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // تحقق وهمي - استبدل بالتحقق الحقيقي
    if (email.includes("@") && password.length > 3) {
      const loggedInUser = {
        email,
        name: "User",
        photoURL: "/avatar.png",
      };
      setUser(loggedInUser); // تحديث الـ context + localStorage
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl mb-6 font-semibold text-center">Login</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          suppressHydrationWarning
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          suppressHydrationWarning
        />
        <button
          type="submit"
          className=" animate-bounce w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
          suppressHydrationWarning
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/signup" className="text-orange-500 hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
