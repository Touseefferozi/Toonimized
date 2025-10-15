import React, { useState } from "react";
import { auth } from "../Firebase"; // adjust path if needed
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ User signed up:", userCredential.user);
      alert("Signup successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("❌ Error:", error.code, error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 w-80 md:w-96"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-full px-4 py-2 w-full mb-4 outline-none focus:border-indigo-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-full px-4 py-2 w-full mb-6 outline-none focus:border-indigo-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-full text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
