"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Bell, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";


const Navbar = () => {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = false;

  return (
    <nav className="lg:mx-20 sm:mx-10 mx-4 mt-4 flex justify-between rounded-full items-center shadow-lg px-4 py-4 bg-white dark:bg-[#27272a]">
      <div className="flex items-center space-x-4 px-4">
        <Link href="/" className="text-2xl font-bold dark:text-white light:text-black ">
          Eventum
        </Link>
        {!isAdminRoute && user &&(
          <div className="hidden md:flex space-x-4">
            <Link href="/events" className="text-foreground hover:text-primary">
              Events
            </Link>
            <Link
              href="/dashboard"
              className="text-foreground hover:text-primary"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />

        {user ? (
          <div>
            <Bell className="h-6 w-6 hidden md:flex" />
            <button>
              <User className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <button className="py-1 px-5 rounded-[16px] ">Signin</button>
        )}
        <div className="md:hidden flex justify-center items-center h-full">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="absolute top-20 right-4 p-4 rounded-lg w-full  bg-background flex flex-col gap-4 items-start justify-center "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Link
            href="/events"
            className="text-foreground hover:text-primary font-bold"
          >
            Events
          </Link>
          <Link
            href="/dashboard"
            className="text-foreground hover:text-primary font-bold"
          >
            Dashboard
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
