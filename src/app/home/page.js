"use client";

import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import {
  Search,
  QrCode,
  UtensilsCrossed,
  Beef,
  Coffee,
  Pizza,
} from "lucide-react";
import foodAndDrinks from "../libs/data/menu";
import useCartStore from "../libs/zustand/cart";

const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, cart } = useCartStore();

  const handleCardClick = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image,
      qty: 1,
    });
  };

  const filteredItems = foodAndDrinks.filter(
    (item) =>
      (selectedCategory === "semua" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AuthLayout page="Menu Cafe">
      <div className="pb-20">
        <div className="flex items-center bg-white p-4 rounded-xl gap-2 border">
          <Search />
          <input
            type="text"
            className="w-full active:border-none focus:border-none focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <QrCode />
        </div>

        <div className="grid grid-cols-4 mt-3 gap-2">
          <div
            className={`${
              selectedCategory === "semua"
                ? "bg-[#39439D] text-white"
                : "bg-white text-[#39439D]"
            } p-3 rounded-xl flex flex-col gap-2 items-center justify-center cursor-pointer`}
            onClick={() => setSelectedCategory("semua")}
          >
            <UtensilsCrossed />
            <p className="text-sm">Semua</p>
          </div>
          <div
            className={`${
              selectedCategory === "makanan"
                ? "bg-[#39439D] text-white"
                : "bg-white text-[#39439D]"
            } p-3 rounded-xl flex flex-col gap-2 items-center justify-center cursor-pointer`}
            onClick={() => setSelectedCategory("makanan")}
          >
            <Beef />
            <p className="text-sm">Makanan</p>
          </div>
          <div
            className={`${
              selectedCategory === "minuman"
                ? "bg-[#39439D] text-white"
                : "bg-white text-[#39439D]"
            } p-3 rounded-xl flex flex-col gap-2 items-center justify-center cursor-pointer`}
            onClick={() => setSelectedCategory("minuman")}
          >
            <Coffee />
            <p className="text-sm">Minuman</p>
          </div>
          <div
            className={`${
              selectedCategory === "snack"
                ? "bg-[#39439D] text-white"
                : "bg-white text-[#39439D]"
            } p-3 rounded-xl flex flex-col gap-2 items-center justify-center cursor-pointer`}
            onClick={() => setSelectedCategory("snack")}
          >
            <Pizza />
            <p className="text-sm">Snack</p>
          </div>
        </div>

        <div className="mt-4">
          {filteredItems.length !== 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg relative cursor-pointer"
                  onClick={() => handleCardClick(item)}
                >
                  <div
                    className={`${
                      cart.find((cartItem) => cartItem.id === item.id)
                        ? "absolute right-5 top-5 bg-[#39439D] text-white w-10 h-10 rounded-full flex items-center justify-center"
                        : "hidden"
                    }`}
                  >
                    {cart.find((cartItem) => cartItem.id === item.id)?.qty || 0}
                  </div>
                  <div className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[130px] w-full object-cover rounded-t-xl"
                    />
                    <div>
                      <h1 className="text-lg font-semibold">{item.name}</h1>
                      <p className="text-black/60">{item.category}</p>
                      <span className="font-semibold">
                        {formatRupiah(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center font-bold text-xl mt-10">
              Menu tidak ada!
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
