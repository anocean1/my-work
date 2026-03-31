"use client";

import React from "react";
import { useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center h-16 shrink-0 border-b">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>
      <div className="flex items-center space-x-4">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-gray-900">{session?.user?.name}</p>
          <p className="text-xs text-gray-500">{session?.user?.email}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
          {session?.user?.name?.charAt(0) || "A"}
        </div>
      </div>
    </header>
  );
}
