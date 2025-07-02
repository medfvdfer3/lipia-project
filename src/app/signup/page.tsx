"use client";

import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const { setUser } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !name) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // تسجيل وهمي - استبدل بالعملية الحقيقية
    const newUser = {
      email,
      name,
      photoURL: "/avatar.png",
    };
    setUser(newUser);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl mb-6 font-semibold text-center">Create Account</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          suppressHydrationWarning
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          suppressHydrationWarning
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            suppressHydrationWarning
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            suppressHydrationWarning
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-500"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button
          type="submit"
          className=" animate-bounce w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
          suppressHydrationWarning
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
