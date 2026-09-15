import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import { MenuIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const sidebarContent = (
    <>
      {/* Brand header */}
      <div className="px-5 pt-6 pb-5 border-b border-white/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white size-7" />
            <div>
              <p className="font-semibold text-[13px] text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Management System
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Profile card */}

      {/* Navigation label */}

      {/* Navigation List */}

      {/* Logout */}
    </>
  );

  return (
    <>
      {/* Mobile Hamburger button */}

      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixedtop-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>

      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}

      <aside className="hidden lg:flex flex-col h-full w-65 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4">
        {sidebarContent}
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 text-white z-50 flex flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
