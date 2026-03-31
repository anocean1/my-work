import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  status?: "healthy" | "warning" | "error";
}

export function StatCard({ label, value, status }: StatCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "healthy": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "error": return "text-red-500";
      default: return "";
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border transition hover:shadow-md">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</h3>
      <p className={`text-3xl font-bold mt-2 ${getStatusColor()}`}>{value}</p>
    </div>
  );
}
