import Image from "next/image";
import logo from "../public/assets/logo.png"
import welcome from "../public/assets/take_away.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#39439D] h-screen overflow-hidden">
      <div className="p-5 flex flex-col justify-center items-center w-full mt-5">
        <Image src={logo} alt="Logo" width={130} />
        <Image src={welcome} alt="Logo" className="-mb-[73px]"  />
      </div>
      <div className="bg-white h-full rounded-t-3xl">
        <div className="p-7 flex flex-col gap-2">
          <h1 className="text-[#39439D] font-semibold text-3xl">Kelola usaha anda Secara Instan!</h1>
          <p>
            Atur menu dan transaksi dengan efisien, langsung dari aplikasi kami!
          </p>
          <Link href="/login" className="bg-[#39439D] mt-2 font-semibold w-full text-white p-3 rounded-lg text-center">
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
