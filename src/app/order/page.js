"use client";

import React from "react";
import AuthLayout from "../layout/AuthLayout";
import useCartStore from "../libs/zustand/cart";
import {
  CirclePlus,
  CircleMinus,
  QrCode,
  CircleDollarSign,
  ChevronRight,
  CreditCard
} from "lucide-react";
import formatRupiah from "../libs/formatRupiah";

const Order = () => {
  const { cart, total } = useCartStore();

  return (
    <AuthLayout page="Detail Pemesanan">
      <div className="flex flex-col h-full">
        {/* Daftar order bisa di-scroll */}
        <div className="flex-grow overflow-scroll mb-[270px]">
          <div className="flex flex-col gap-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow p-3 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    className="w-[100px] h-[90px] object-cover rounded-xl"
                    alt=""
                  />
                  <div>
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                    <p>{item.category}</p>
                    <h2 className="font-semibold text-lg">
                      {formatRupiah(item.price)}
                    </h2>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <CircleMinus />
                  <div>{item.qty}</div>
                  <CirclePlus />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian checkout tetap di bagian bawah */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t z-50 h-[270px] p-5">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="shadow p-3 text-white bg-[#39439D] rounded-xl flex flex-col items-center justify-center gap-2">
              <CircleDollarSign />
              <span>CASH</span>
            </div>
            <div className="shadow p-3 text-[#39439D] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
              <QrCode />
              <span>QR</span>
            </div>
            <div className="shadow p-3 text-[#39439D] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
              <CreditCard />
              <span>CARD</span>
            </div>
          </div>
          <div className="bg-[#39439D] text-white py-4 px-5 rounded-xl flex justify-between items-center">
            <div>{formatRupiah(total)}</div>
            <div className="flex items-center">
              <span>Proses</span>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Order;
