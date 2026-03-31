"use client";

import { useSession } from "next-auth/react";
import { Sidebar } from "@/widgets/Sidebar";
import { Header } from "@/widgets/Header";
import { StatCard } from "@/features/dashboard/components/StatCard";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stat Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard label="Total Users" value="1,234" />
              <StatCard label="Active Sessions" value="56" />
              <StatCard label="System Status" value="Healthy" status="healthy" />
            </div>

            {/* Content Area */}
            <div className="p-8 bg-white rounded-lg shadow-sm border min-h-[400px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Welcome back to the Admin Console</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                This central dashboard provides a high-level overview of your system's performance and user activity. 
                Navigate through the sidebar to manage users, configurations, and review system logs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-semibold mb-2">Recent Updates</h4>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• New security patches applied on March 30, 2026</li>
                    <li>• System performance optimized by 15%</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-semibold mb-2">Quick Actions</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition">
                      Invite User
                    </button>
                    <button className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition">
                      View Logs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
