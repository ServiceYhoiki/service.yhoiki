'use client';
import { prototype } from 'events';
import Opsi from './opsi';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Swiper from 'swiper';
import 'swiper/css';

// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
// });

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
const ratings = [
  { value: 5, color: 'bg-yellow-400', width: 'w-[90%]' },
  { value: 4, color: 'bg-green-500', width: 'w-[85%]' },
  { value: 3, color: 'bg-yellow-400', width: 'w-[70%]' },
  { value: 2, color: 'bg-red-400', width: 'w-[30%]' },
  { value: 1, color: 'bg-red-400', width: 'w-[30%]' },
]
const galleryImages: GalleryImage[] = [
  { id: 1, src: '/image/Produk.png', alt: 'gambar 1' },
  { id: 2, src: '/image/Produk.png', alt: 'gambar 2' },
  { id: 3, src: '/image/Produk.png', alt: 'gambar 3' },
  { id: 4, src: '/image/Produk.png', alt: 'gambar 4' },
  { id: 5, src: '/image/Produk.png', alt: 'gambar 5' },
  // Tambahkan sebanyak yang dibutuhkan
];

const packages  = [
  {
    name: 'Basic',
    price: '100.000',
    User_research_and_persona: false,
    prototype: false,
    ui_design: true,
    source_file: true,
    number_of_page_or_screen: 1,
    revisions: 2,
  },
  {
    name: 'Standard',
    price: '500.000',
    User_research_and_persona: false,
    prototype: true,
    ui_design: true,
    source_file: true,
    number_of_page_or_screen: 5,
    revisions: 4,
  },
  {
    name: 'Premium',
    price : '700.000',
    User_research_and_persona: true,
    prototype: true,
    ui_design: true,
    source_file: true,
    number_of_page_or_screen: 10,
    revisions: 10,
  },
  
]

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
      <div className='flex flex-col mt-5 pb-80 ml-5'>
        <div className='flex flex-col gap-0.5 mt-5 ml-5'>
            <h1 className='font-bold text-4xl text-[#1E2939] md:text-4xl'>
                Design UI/UX
            </h1>
            <p className='text-lg text-gray-600'>
                Design Gensin UI/UX 
            </p>
        </div>
        <div className="max-w-3xl mx-auto py-4">
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
      <div className="mt-4 flex justify-between overflow-x-hidden w-[650px]">
        {galleryImages.map((img, index) => (
          <button key={img.id} onClick={() => setCurrentIndex(index)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={140}
              height={65}
              className={`border-2 rounded-lg ${currentIndex === index ? 'border-green-500' : 'border-transparent  opacity-[50%]'}`}
            />
          </button>
        ))}
      </div>
    </div>
    {/* Informasi Creator*/}
      <div className='flex flex-row w-full justify-between items-center mt-5'>
        <div className='flex flex-row items-center gap-3 justify-between'>
          <Image
            src={"/image/Yhoiki2.png"}
            width={82}
            height={82}
            alt=''
          ></Image>
          <div>
            <h1 className='font-bold text-2xl'>Kipin Sadbor</h1>
            <p>Hai saya kipin dari Team Yhoiki</p>
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex items-center gap-2'>
                <Image
                  src={"/image/Star5.png"}
                  width={20}
                  height={20}
                  alt='Rating'>
                </Image>
                <p className='font-bold text-gray-500'>4.9</p>
                <p className='ml-3 font-bold text-gray-500'>(1500)</p>
                <div className='items-center flex ml-3  bg-gradient-to-r from-green-500 to-green-600 px-2.5 py-0.5 rounded-3xl gap-1'>
                  <p className='text-white font-bold'>Top Rate</p>
                  <Image
                    src={"/image/Star4.png"}
                    width={15}
                    height={15}
                    alt=''>
                    </Image>
                  <Image
                    src={"/image/Star4.png"}
                    width={15}
                    height={15}
                    alt=''>
                    </Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center border-4 border-green-600 bg-gradient-to-r from-green-500 to-green-600 px-14 h-12 rounded-full text-white font-bold hover:from-green-600 hover:to-green-700 cursor-pointer hover:border-green-800 transition">
          Contact
        </button>
      </div>
      <div className='mt-5'>
        <p className='font-[600] text-lg'>About this produk</p>
        <p className='mt-2.5'>
          Hai <br /> <br /> Saya seorang desainer situs web dan halaman arahan PSD/XD profesional. Saya dapat <br /> mendesain segala jenis Desain Situs Web PSD/XD, Template PSD/XD, halaman web PSD/XD. <br /> Saya bertanggung jawab kepada pelanggan dengan menepati komitmen dan mengutamakan kualitas <br /> terbaik. Moto utama saya adalah jika pelanggan senang, saya akan senang selamanya. 
        </p>
      </div>

      {/* Portofolio */}
      <div className="w-[740px] bg-white rounded-xl overflow-hidden mt-6">
        <h2 className="text-xl font-semibold mb-4">My Portofolio</h2>

        {/* Main Project Card */}
        <div className="border rounded-lg p-4 hover:shadow-lg transition">
          <div className="flex gap-4">
            <div className="shrink-0">
              <Image
                src="/image/portofolio.png"
                alt="Portfolio Image"
                width={280}
                height={280}
                quality={100}
                className="rounded-md border"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm text-gray-500">From: Januari 2025</p>
              <h3 className="text-lg font-bold mt-1">create company ui</h3>
              <p className="text-sm text-gray-700 mt-1">
                Online platform for creating and selling digital products, such as
                courses, mentorships, e-books, and webinars.
              </p>

              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  Education Consulting
                </span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  +13
                </span>
              </div>

              <div className="flex justify-between text-sm mt-4">
                <div>
                  <span className="font-semibold">Project Cost</span>
                  <br />
                  Rp. 400.000-700.000
                </div>
                <div>
                  <span className="font-semibold">Project Duration</span>
                  <br />
                  7-30 Days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel / Thumbnail Section */}
        <div className="flex gap-3 mt-6 border border-gray-500 rounded-lg p-3 h-[149px]">
          <Image
            src="/image/portofolio.png"
            alt="Thumb 1"
            width={137}
            height={137}
            className="border-2 border-green-500 rounded-md"
          />
          <Image
            src="/image/portofolio2.png"
            alt="Thumb 2"
            width={205}
            height={125}
            className="rounded-md"
          />
          <Image
            src="/image/portofolio2.png"
            alt="Thumb 2"
            width={205}
            height={125}
            className="rounded-md"
          />
          <div className="w-[95px] h-[116px] flex items-center justify-center border rounded-md text-sm text-gray-500 bg-gray-50">
            +1<br />Projects
          </div>
        </div>
        <Opsi />
      </div>

    {/*Compare Package*/}
     <div className="w-[640px] mt-9">
      <h2 className="text-2xl font-bold mb-6">Compare packages</h2>
      <div className="overflow-x-auto border rounded-xl">
        <table className="min-w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="w-52 h-32 bg-gray-100 text-gray-400 text-left p-4 ">Package</th>
              {packages.map((p, i) => (
                <th key={i} className="p-4 border-l border-gray-700">
                  <div className={`p-4 rounded-xl shadow-md w-32 h-32 text-left font-bold ${i === 0 ? 'bg-purple-100' : i === 1 ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                    <p className="font-bold ">{p.name}</p>
                    <p className="text-[7px] text-gray-600 mb-2">Our Most Populer Plan.</p>
                    <button className="bg-green-500 text-white px-4 mt-5 rounded-full font-semibold">
                      {p.price}
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:nth-child(odd)]:bg-green-600">
            <tr>
              <td className="text-left p-4 bg-green-600 text-white font-bold text-sm ">User Research And Personas</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold text-white border-l border-gray-700">{p.User_research_and_persona ? '✓' : '—'}</td>
              ))}
            </tr>
            <tr>
              <td className="text-left p-4 bg-white text-gray-500 font-bold text-sm">Prototype</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold border-l border-gray-700">{p.prototype ? '✓' : '—'}</td>
              ))}
            </tr>
            <tr className="">
              <td className="text-left p-4 bg-green-600 text-white font-bold text-sm ">UI Design</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold text-white border-l border-gray-700">{p.ui_design ? '✓' : '—'}</td>
              ))}
            </tr>
            <tr>
              <td className="text-left p-4 bg-white text-gray-500 font-bold text-sm">Source File</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold border-l border-gray-700">{p.source_file ? '✓' : '—'}</td>
              ))}
            </tr>
            <tr>
              <td className="text-left p-4 bg-green-600 text-white font-bold text-sm">Number Of Page Or Screens</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold text-white border-l border-gray-700">{p.number_of_page_or_screen}</td>
              ))}
            </tr>
            <tr>
              <td className="text-left p-4 bg-white text-gray-500 font-bold text-sm">Revisions</td>
              {packages.map((p, i) => (
                <td key={i} className="p-4 font-bold border-l border-gray-700">{p.revisions}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Rekomendasi */}
    <div className='w-[740px]'>
      <h2 className='font-bold text-2xl mt-8'>Recommended for you</h2>
      <div className='flex flex-row border p-5 rounded-2xl gap-6'>

        {/* Produk */}
        <div className='flex flex-col w-[218px] rounded-3xl overflow-hidden border border-gray-400 bg-gray-100 shadow-lg'>
            <Image
            src={"/image/malvin1.png"}
            width={218}
            height={126}
            alt='Produk'
            ></Image>
            <div className='flex flex-row justify-between items-center px-3 py-2'>
              <div className='flex flex-row items-center gap-0.5'>
                <Image
                  src={"/image/Yhoiki2.png"}
                  width={30}
                  height={30}
                  alt='Yhoiki Logo'
                ></Image>
                <p className='text-[12px] font-bold text-gray-600'>Kelvin Kipin</p>
              </div>
              <div className='items-center flex ml-3  bg-gradient-to-r from-green-500 to-green-600 px-2 py-0.5 rounded-3xl gap-1'>
                  <p className='text-white font-bold text-[8px]'>Top Rate</p>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    quality={100}
                    alt=''>
                    </Image>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    alt=''>
                    </Image>
                </div>
            </div>
            <div className='px-3 py-2'>
              <p className='text-[12px]'>
                Cara Merubah Dosa Menjadi Saldo Dana Biar kaya orang hehehe awokaowkawokaw
              </p>
            </div>
            <div className='flex flex-col px-4'>
              <div className='flex flex-row items-center gap-1'>
                <Image
                  src={"/image/Star5.png"}
                  width={15}
                  height={15}
                  alt='Rating'>
                </Image>
                <p className='font-bold text-sm text-gray-500'>4.9</p>
                <p className='text-sm text-gray-400 font-medium'>(1995)</p>
              </div>
              <div className='flex flex-row items-center gap-2 mt-2 mb-2'>
                <button className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 w-[160px] rounded-full font-semibold hover:from-green-600 hover:cursor-pointer transition'>
                  From 25$
                </button>
                <div className='bg-gray-200 p-2 rounded-2xl'>
                  <ShoppingCart size={20} className='text-gray-500 hover:text-green-500 hover:cursor-pointer transition' />
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col w-[218px] rounded-3xl overflow-hidden border border-gray-400 bg-gray-100 shadow-lg'>
            <Image
            src={"/image/malvin1.png"}
            width={218}
            height={126}
            alt='Produk'
            ></Image>
            <div className='flex flex-row justify-between items-center px-3 py-2'>
              <div className='flex flex-row items-center gap-0.5'>
                <Image
                  src={"/image/Yhoiki2.png"}
                  width={30}
                  height={30}
                  alt='Yhoiki Logo'
                ></Image>
                <p className='text-[12px] font-bold text-gray-600'>Kelvin Kipin</p>
              </div>
              <div className='items-center flex ml-3  bg-gradient-to-r from-green-500 to-green-600 px-2 py-0.5 rounded-3xl gap-1'>
                  <p className='text-white font-bold text-[8px]'>Top Rate</p>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    quality={100}
                    alt=''>
                    </Image>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    alt=''>
                    </Image>
                </div>
            </div>
            <div className='px-3 py-2'>
              <p className='text-[12px]'>
                Cara Merubah Dosa Menjadi Saldo Dana Biar kaya orang hehehe awokaowkawokaw
              </p>
            </div>
            <div className='flex flex-col px-4'>
              <div className='flex flex-row items-center gap-1'>
                <Image
                  src={"/image/Star5.png"}
                  width={15}
                  height={15}
                  alt='Rating'>
                </Image>
                <p className='font-bold text-sm text-gray-500'>4.9</p>
                <p className='text-sm text-gray-400 font-medium'>(1995)</p>
              </div>
              <div className='flex flex-row items-center gap-2 mt-2 mb-2'>
                <button className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 w-[160px] rounded-full font-semibold hover:from-green-600 hover:cursor-pointer transition'>
                  From 25$
                </button>
                <div className='bg-gray-200 p-2 rounded-2xl'>
                  <ShoppingCart size={20} className='text-gray-500 hover:text-green-500 hover:cursor-pointer transition' />
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col w-[218px] rounded-3xl overflow-hidden border border-gray-400 bg-gray-100 shadow-lg'>
            <Image
            src={"/image/malvin1.png"}
            width={218}
            height={126}
            alt='Produk'
            ></Image>
            <div className='flex flex-row justify-between items-center px-3 py-2'>
              <div className='flex flex-row items-center gap-0.5'>
                <Image
                  src={"/image/Yhoiki2.png"}
                  width={30}
                  height={30}
                  alt='Yhoiki Logo'
                ></Image>
                <p className='text-[12px] font-bold text-gray-600'>Kelvin Kipin</p>
              </div>
              <div className='items-center flex ml-3  bg-gradient-to-r from-green-500 to-green-600 px-2 py-0.5 rounded-3xl gap-1'>
                  <p className='text-white font-bold text-[8px]'>Top Rate</p>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    quality={100}
                    alt=''>
                    </Image>
                  <Image
                    src={"/image/Star4.png"}
                    width={8}
                    height={8}
                    alt=''>
                    </Image>
                </div>
            </div>
            <div className='px-3 py-2'>
              <p className='text-[12px]'>
                Cara Merubah Dosa Menjadi Saldo Dana Biar kaya orang hehehe awokaowkawokaw
              </p>
            </div>
            <div className='flex flex-col px-4'>
              <div className='flex flex-row items-center gap-1'>
                <Image
                  src={"/image/Star5.png"}
                  width={15}
                  height={15}
                  alt='Rating'>
                </Image>
                <p className='font-bold text-sm text-gray-500'>4.9</p>
                <p className='text-sm text-gray-400 font-medium'>(1995)</p>
              </div>
              <div className='flex flex-row items-center gap-2 mt-2 mb-2'>
                <button className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 w-[160px] rounded-full font-semibold hover:from-green-600 hover:cursor-pointer transition'>
                  From 25$
                </button>
                <div className='bg-gray-200 p-2 rounded-2xl'>
                  <ShoppingCart size={20} className='text-gray-500 hover:text-green-500 hover:cursor-pointer transition' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    {/* Rating */}
    <div>
      <h2 className='font-bold text-xl'>Reviews</h2>
      <div className='flex flex-row gap-9 mt-7'>
          <h2 className='font-bold text-5xl'>4,7</h2>
          <div className='flex flex-col'>
            <div className='flex-row flex'>
              <Image
                src={"/image/Star5.png"}
                width={40}
                quality={100}
                height={40}
                alt=''
              ></Image>
              <Image
                src={"/image/Star5.png"}
                width={40}
                quality={100}
                height={40}
                alt=''
              ></Image>
              <Image
                src={"/image/Star5.png"}
                width={40}
                quality={100}
                height={40}
                alt=''
              ></Image>
              <Image
                src={"/image/Star5.png"}
                width={40}
                quality={100}
                height={40}
                alt=''
              ></Image>
              <Image
                src={"/image/Star17.png"}
                width={40}
                quality={100}
                height={40}
                alt=''
              ></Image>
            </div>
              <p>(1170 reviews)</p>
          </div>
      </div>
      <div className="space-y-2 mt-10">
      {ratings.map((rating) => (
        <div key={rating.value} className="flex items-center space-x-2">
          <span className="w-4 text-sm">{rating.value}</span>
          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-4 ${rating.width} ${rating.color} rounded-full`}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    {/* Komentar */}
    <div className='flex flex-col border rounded-2xl mt-10 py-5 w-[740px]'>
      <div className='border-b-2 border-gray-600 pb-5'>
        <h1 className='ml-20'>Kipin Sadbor</h1>
        <div className='flex flex-row items-center gap-2 ml-20'>
          <p className='font-bold'>5</p>
          <div className='flex flex-row items-center gap-0.5'>
            <Image
              src={"/image/indo.png"}
              width={20}
              height={20}
              alt='Rating'
            ></Image>
            <p className='text-gray-500 text-[12px]'>Indonesia</p>
          </div>
        </div>
      </div>
      <div className='pt-2.5 ml-5 gap-2'>
        <div className='flex flex-row gap-0.5 items-center'>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src='/image/Star5.png'
              width={20}
              height={20}
              alt={`Star ${index + 1}`}
              quality={100}
            />
          ))}
          <p className='text-[10px] text-gray-500 '>3 days ago</p>
        </div>
        <p>SUMATO company is a great collaborative team, they have high commitment and professionalism to every detail, very strict project monitoring, their Director, Mr. Owais, has a great level of communication, their Design Operations team, Mr. Talha, has an extraordinary commitment to detail and quality.</p>
      </div>
    </div>
      </div>
    </div>
  );
}