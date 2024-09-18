"use client";

import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import useCartStore from "../libs/zustand/cart";
import {
  CirclePlus,
  CircleMinus,
  QrCode,
  CircleDollarSign,
  ChevronRight,
  CreditCard,
  Trash,
} from "lucide-react";
import formatRupiah from "../libs/formatRupiah";

const Order = () => {
  const { cart, total, increaseQty, decreaseQty, removeFromCart } =
    useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProcess = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  // Menentukan jumlah uang yang lebih besar dari total
  const additionalAmount = Math.ceil(total / 10000) * 10000;

  return (
    <AuthLayout page="Detail Pemesanan">
      <div className="flex flex-col h-full">
        {/* Daftar order bisa di-scroll */}
        <div className="flex-grow overflow-scroll mb-[270px]">
          {cart.length !== 0 ? (
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
                      alt={item.name}
                    />
                    <div>
                      <h1 className="font-semibold text-lg">{item.name}</h1>
                      <p>{item.category}</p>
                      <h2 className="font-semibold text-lg">
                        {formatRupiah(item.price)}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex gap-4 items-center">
                      <button onClick={() => decreaseQty(item.id)}>
                        <CircleMinus className="cursor-pointer" />
                      </button>
                      <div>{item.qty}</div>
                      <button onClick={() => increaseQty(item.id)}>
                        <CirclePlus className="cursor-pointer" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-5 py-1 rounded-xl"
                    >
                      hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-40 font-semibold text-xl">
              silahkan pilih menu!
            </div>
          )}
        </div>

        {/* Bagian checkout tetap di bagian bawah */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t z-50 h-[270px] p-5">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="shadow p-2 text-white bg-[#39439D] rounded-xl flex flex-col items-center justify-center gap-2">
              <CircleDollarSign />
              <span>CASH</span>
            </div>
            <div className="shadow p-2 text-[#39439D] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
              <QrCode />
              <span>QR</span>
            </div>
            <div className="shadow p-2 text-[#39439D] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
              <CreditCard />
              <span>CARD</span>
            </div>
          </div>
          <div
            className="bg-[#39439D] text-white py-5 px-5 rounded-xl flex justify-between items-center"
            onClick={handleProcess}
          >
            <div>{formatRupiah(total)}</div>
            <div className="flex items-center">
              <button className="flex items-center gap-2">
                <span>Proses</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Pembayaran - Cash
            </h2>
            <form className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder={formatRupiah(total)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#39439D] mt-2 font-semibold w-full border-none text-white p-3 rounded-lg text-center">
                  {formatRupiah(total)}
                </button>
                <button className="bg-[#39439D] mt-2 font-semibold w-full border-none text-white p-3 rounded-lg text-center">
                  {formatRupiah(additionalAmount)}
                </button>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#39439D] text-white rounded-md"
                >
                  Proses
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default Order;
