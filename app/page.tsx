'use client'
import { useState, useEffect, } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [datas, setDatas] = useState<any[]>([]);
  useEffect(() => {
    const ambilData = async () =>{
    try{
      const response = await fetch("/data/data.json");
      const result = await response.json();
      setDatas(result);
    }catch(error){
      console.error("Error fetching data:", error);
    }
  }
  ambilData()
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-green-600 px-[150px] py-[74px]">
        <h1 className="font-bold text-4xl text-white leading-tight text-center md:text-4xl">
          Nikmatilah Layanan Yang Ada Di <span className="bg-white text-[#3AAB57] p-2 rounded-xl">Yhoiki</span>
        </h1>
        <p className="text-lg mt-4 text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cumque tempore fuga</p>
      </div>
        <div className="flex flex-col items-center gap-5 mt-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#1E2939] ">
              PILIH LAYANAN YHOIKI
            </p>
            <p className="text-xl text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {datas.map((post:any) =>(
              <Link href={post.link} key={post.id} className="flex flex-col items-center rounded-lg shadow-lg w-[300px] border-[1px] border-black overflow-hidden">
                <Image 
                  src={post.Gambar} 
                  alt="gambar"
                  width={368}
                  height={233}
                ></Image>
                <Image
                  src={post.icon} 
                  alt="icon"
                  width={100}
                  height={100}
                  className="relative -top-10"
                ></Image>
                <div className="flex flex-col items-center -mt-4">
                  <h3 className="text-2xl font-bold text-[#1E2939]">{post.name}</h3>
                  <p className="mx-4 text-center text-[12px]">Tur adipiscing elit ametectela dalaracc lorem ipsum dolor sit ametectelacus vel facilisis semper volutpat</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
  }

