import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import { MenuIcon } from "lucide-react";

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

  return (
    <>
      {/* Mobile Hamburger button */}

      <button className="lg:hidden fixedtop-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10">
        <MenuIcon size={20}/>
      </button>
    </>
  );
};

export default Sidebar;
