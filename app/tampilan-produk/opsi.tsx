'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

type PackageOption = 'Basic' | 'Standard' | 'Premium';

const packages = {
  Basic: {
    title: '🚀 Desain situs web 1 halaman di Figma (desktop + seluler)',
    delivery: '3-day delivery',
    revisions: 1,
    features: ['1 Page', 'Responsive design'],
    price: 'Rp. 150.000',
  },
  Standard: {
    title: '🚀 Desain situs web 3 Halaman di Figma (desktop + seluler)',
    delivery: '4-day delivery',
    revisions: 2,
    features: ['3 Page', 'Responsive design', 'Source file'],
    price: 'Rp. 280.000',
  },
  Premium: {
    title: '🚀 Desain situs web Beranda + 5 Halaman Dalam di Figma (desktop + seluler) | lebih banyak halaman? Mari kita bicarakan 👇',
    delivery: '5-day delivery',
    revisions: 2,
    features: ['3 Page', 'Responsive design', 'Source file'],
    price: 'Rp. 430.000',
  },
};

export default function PackageTabs() {
  const [selected, setSelected] = useState<PackageOption>('Premium');

  return (
    <div className='fixed right-5 max-w-md bg-white rounded-2xl p-4 bottom-20'>
      <div className="border-2 border-gray-300 rounded-xl p-4">
        {/* Tabs */}
        <div className="flex justify-around mb-4 border-b">
          {(['Basic', 'Standard', 'Premium'] as PackageOption[]).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold hover:cursor-pointer ${
                selected === tab ? 'text-white bg-green-500 rounded-t-md hover:bg-green-700' : 'text-gray-500 underline hover:text-green-500'
              }`}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Details */}
        <div className="p-4 rounded-b-xl space-y-3">
          <p className="text-sm">{packages[selected].title}</p>

          <div className="flex items-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <span>⏱</span>
              {packages[selected].delivery}
            </div>
            <div className="flex items-center gap-1">
              <span>🔁</span>
              {packages[selected].revisions} Revision
            </div>
          </div>

          <ul className="text-sm text-gray-700 space-y-1">
            {packages[selected].features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span>✔</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="text-right font-bold text-lg">{packages[selected].price}</div>
        </div>

      </div>
        {/* Continue Button */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition hover:cursor-pointer">
          <ShoppingCart size={18} />
          Continue
        </button>
    </div>
  );
}
