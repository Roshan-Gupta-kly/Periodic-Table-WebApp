"use client";
import { Home, Grid3X3, Brain, Trophy, Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/elements", label: "Elements", icon: Grid3X3 },
  { href: "/quiz", label: "Quiz", icon: Brain },
  { href: "/rewards", label: "Rewards", icon: Trophy },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 p-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Grid3X3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 ">
              Periodic Explorer
            </span>
          </Link>

          {/* Desktop view */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    className={`flex items-center space-x-2 p-2.5 rounded-lg cursor-pointer ${
                      isActive
                        ? "bg-[#DBEAFE] text-[#1D4EDF] hover:text-black"
                        : ""
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </Link>
              );
            })}
          </div>
          {/* Mobile view */}
          <div className="flex items-center space-x-1 md:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    className={`flex items-center space-x-2 p-2.5 rounded-lg cursor-pointer ${
                      isActive
                        ? "bg-[#DBEAFE] text-[#1D4EDF] hover:text-black"
                        : ""
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {/* <span>{item.label}</span> */}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
