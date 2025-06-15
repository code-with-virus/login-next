"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleManualLogin = () => {
    if (role === "teacher" && username === "teacher" && password === "teach123") {
      router.push("/dashboard/teacher");
    } else if (role === "admin" && username === "admin" && password === "admin123") {
      router.push("/dashboard/admin");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login Portal</h2>

        <select className="w-full p-2 border rounded mb-4" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        {role === "student" ? (
          <button onClick={() => signIn("google")} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign in with Google
          </button>
        ) : (
          <>
            <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleManualLogin} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
