
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { Search, QrCode } from "lucide-react";

const History = () => {
  return (
    <AuthLayout page="History">
      <div>
        <div className="flex items-center bg-white p-4 rounded-xl gap-2 border">
          <Search />
          <input
            type="text"
            className="w-full active:border-none focus:border-none focus:outline-none"
            placeholder="Search order"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {[...Array(5)].map((item) => (
            <div className="bg-white shadow rounded-xl p-2 w-full font-medium" key={item}>
              <div className="p-3">
                <h1>
                  Sun, Sep 12 2024, 13.00 - Cash <span className="text-green-400">Rp. 321.100</span>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
};

export default History;
