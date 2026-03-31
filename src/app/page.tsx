"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!session) {
    return null; // Handled by middleware
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-slate-700">Admin Console</div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-3 rounded hover:bg-slate-800 transition">
            <LayoutDashboard className="mr-3 w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center p-3 rounded hover:bg-slate-800 transition">
            <Users className="mr-3 w-5 h-5" /> Users
          </a>
          <a href="#" className="flex items-center p-3 rounded hover:bg-slate-800 transition">
            <Settings className="mr-3 w-5 h-5" /> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={() => signOut()}
            className="flex items-center w-full p-3 rounded hover:bg-red-600 transition text-red-300 hover:text-white"
          >
            <LogOut className="mr-3 w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Logged in as: <strong>{session.user?.name}</strong></span>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {session.user?.name?.charAt(0)}
            </div>
          </div>
        </header>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Users</h3>
              <p className="text-3xl font-bold mt-2">1,234</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Active Sessions</h3>
              <p className="text-3xl font-bold mt-2">56</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">System Status</h3>
              <p className="text-3xl font-bold mt-2 text-green-500">Healthy</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border min-h-[400px]">
            <h3 className="text-lg font-semibold mb-4">Welcome to the Admin Console</h3>
            <p className="text-gray-600">
              This is your central hub for managing application resources, user accounts, and system configurations.
              Use the sidebar to navigate through different administrative features.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
