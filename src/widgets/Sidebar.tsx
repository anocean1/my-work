"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
      <div className="p-6 text-xl font-bold border-b border-slate-700">Admin Console</div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/" className="flex items-center p-3 rounded hover:bg-slate-800 transition bg-slate-800">
          <LayoutDashboard className="mr-3 w-5 h-5" /> Dashboard
        </Link>
        <Link href="#" className="flex items-center p-3 rounded hover:bg-slate-800 transition">
          <Users className="mr-3 w-5 h-5" /> Users
        </Link>
        <Link href="#" className="flex items-center p-3 rounded hover:bg-slate-800 transition">
          <Settings className="mr-3 w-5 h-5" /> Settings
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full p-3 rounded hover:bg-red-600 transition text-red-300 hover:text-white"
        >
          <LogOut className="mr-3 w-5 h-5" /> Logout
        </button>
      </div>
    </aside>
  );
}
