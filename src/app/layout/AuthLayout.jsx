"use client";

import React from "react";
import { House, ShoppingBasket, Wallet, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Home",
    icon: House, // Icon sebagai komponen
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
    <div className="flex flex-col justify-between h-screen">
      <nav className="h-[70px] border-b-2 p-2 text-[#39439D] font-semibold flex items-center justify-center">
        {page}
      </nav>
      <div className="h-full bg-[#F1F1FE] p-3 overflow-scroll">{children}</div>
      <div className="h-[90px] border-t-2 bg-white">
        <div className="flex items-center justify-between h-full px-5">
          {menu.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className={`flex flex-col items-center ${
                  pathname === item.link ? "text-black" : "text-black/30"
                } `}
              >
                <item.icon className="w-6 h-6 " />
                <span className="text-md font-semibold">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
