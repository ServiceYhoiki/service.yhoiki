'use client';
import Opsi from './opsi';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/image/Produk.png', alt: 'gambar 1' },
  { id: 2, src: '/image/Produk.png', alt: 'gambar 2' },
  { id: 3, src: '/image/Produk.png', alt: 'gambar 3' },
  { id: 4, src: '/image/Produk.png', alt: 'gambar 4' },
  // Tambahkan sebanyak yang dibutuhkan
];

export default function TampilanProduk() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  return (
    <div className="flex flex-row justify-between px-5 py-[74px]">
      <div className='flex flex-col mt-5 pb-80'>
        <div className='flex flex-col gap-0.5 ml-4 mt-5'>
            <h1 className='font-bold text-4xl text-[#1E2939] md:text-4xl'>
                Design UI/UX
            </h1>
            <p className='text-lg text-gray-600'>
                Design Gensin UI/UX 
            </p>
        </div>
        <div className="max-w-3xl mx-auto p-4">
      {/* Gambar utama */}
      <div className="relative flex justify-center items-center">
        <button onClick={prevImage} className="absolute left-0 bg-white p-2 rounded-full shadow hover:cursor-pointer hover:bg-green-500 transition">
          ◀
        </button>
        <Image
          src={galleryImages[currentIndex].src}
          alt={galleryImages[currentIndex].alt}
          width={655}
          height={315}
          className="rounded-lg object-contain"
        />
        <button onClick={nextImage} className="absolute right-0 bg-white p-2 rounded-full shadow hover:cursor-pointer hover:bg-green-500 transition">
          ▶
        </button>
      </div>

      {/* Thumbnail */}
      <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
        {galleryImages.map((img, index) => (
          <button key={img.id} onClick={() => setCurrentIndex(index)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={140}
              height={65}
              className={`border-2 rounded-lg ${currentIndex === index ? 'border-blue-500' : 'border-transparent  opacity-[50%]'}`}
            />
          </button>
        ))}
      </div>
x    </div>
      </div>
      <Opsi />
    </div>
  );
}