import React from "react";
import { Tab } from "../types";
import { Home, CalendarDays } from "lucide-react";

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: Tab; label: string; icon: any }[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "reservation", label: "Reservation", icon: CalendarDays },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass px-5 py-2 rounded-full flex items-center gap-3 shadow-2xl">
        {/* 로고/타이틀 */}
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <div className="w-8 h-8 rounded-xl bg-white/90 flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full" />
          </div>
          <span className="font-semibold tracking-tight hidden sm:block">
            업무 자동화 포털
          </span>
        </button>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* 탭 */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 " +
                  (active
                    ? "bg-white text-black font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/10")
                }
              >
                <Icon size={18} />
                <span className="text-sm hidden md:block">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
