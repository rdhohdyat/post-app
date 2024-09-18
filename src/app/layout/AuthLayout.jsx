"use client";

import React from "react";
import { House, ShoppingBasket, Wallet, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Home",
    icon: House,
    link: "/home",
  },
  {
    name: "Order",
    icon: ShoppingBasket,
    link: "/order",
  },
  {
    name: "History",
    icon: Wallet,
    link: "/history",
  },
  {
    name: "Setting",
    icon: Settings,
    link: "/setting",
  },
];

const AuthLayout = ({ children, page }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen">
      {/* Nav tetap dengan ukuran yang sama */}
      <nav className="h-[70px] md:h-[100px] border-b-2 p-4 md:p-2 text-[#39439D] font-semibold flex items-center justify-center">
        <span className="text-xl md:text-2xl">{page}</span>
      </nav>

      {/* Konten halaman */}
      <div className="flex-grow bg-[#F1F1FE] p-3 overflow-scroll">
        {children}
      </div>

      {/* Menu bawah tetap berada di posisi fixed */}
      <div className="fixed bottom-0 left-0 right-0 h-[90px] border-t-2 bg-white z-50">
        <div className="flex items-center justify-between h-full px-5">
          {menu.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className={`flex flex-col items-center ${
                  pathname === item.link ? "text-black" : "text-gray-300"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
