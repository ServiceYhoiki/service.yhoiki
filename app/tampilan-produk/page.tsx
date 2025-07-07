import Opsi from './opsi';
import Image from 'next/image';
export default function TampilanProduk() {
  return (
    <div className="flex flex-row justify-between px-5 py-[74px]">
      <div className='flex flex-col '>
        <div className='flex flex-col gap-0.5'>
            <h1 className='font-bold text-4xl text-[#1E2939] md:text-4xl'>
                Design UI/UX
            </h1>
            <p className='text-lg text-gray-600'>
                Design Gensin UI/UX 
            </p>
        </div>
        <div>
            <Image 
                src="/image/Produk.png" 
                alt="gambar produk"
                width={650}
                height={315}
                className='rounded-lg mt-5'
            ></Image>
        </div>
      </div>
      <Opsi />
    </div>
  );
}