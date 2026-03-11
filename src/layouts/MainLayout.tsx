import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 text-center bg-slate-900">
        &copy; 2026 Danny Miguel
      </footer>
    </div>
  );
}