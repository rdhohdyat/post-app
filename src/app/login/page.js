
"use client"

import React from "react";
import frame from "../../public/assets/Frame 1.png";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "/home";
  };
  return (
    <div className="bg-[#39439D] h-screen overflow-hidden">
      <div className="h-[30%] w-full flex flex-col items-center gap-2">
        <Image src={frame} className="w-full" />
      </div>
      <div className="w-full flex justify-center mb-5">
        <Image src={logo} width={130} />
      </div>
      <div className="bg-white rounded-t-3xl h-full p-6">
        <h1 className="text-[#39439D] text-2xl mb-2 font-semibold">Masuk</h1>
        <div className="mb-3">
          <div className="font-semibold text-sm mb-1">Email</div>
          <input
            type="text"
            className="p-2 w-full rounded-xl py-3 bg-[#F1F1FE]"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <div className="font-semibold text-sm mb-1">Password</div>
          <input
            type="text"
            className="p-2 w-full rounded-xl py-3 bg-[#F1F1FE]"
            placeholder=""
          />
        </div>
        <button
          onClick={() => handleLogin()}
          className="bg-[#39439D] mt-2 font-semibold w-full border-none text-white p-3 rounded-lg text-center"
        >
          Masuk Akun
        </button>
        <div className="flex items-center gap-2 mt-3 mb-3">
          <div className="bg-black w-full h-[1px]"></div>
          <p>atau</p>
          <div className="bg-black w-full h-[1px]"></div>
        </div>
        <p className="text-center">
          Belum punya akun ?{" "}
          <span className="text-[#39439D]">
            <Link href="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
