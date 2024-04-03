import React from 'react'
import UploadButton from './UploadButton'
import Image from 'next/image';
import { Plus, Star, Trash } from 'lucide-react';

const images = [
  {
    imgSrc: "/files/img-1.jpeg",
    caption: "4x4 in the Wild!",
    date: "March 2024",
    starred: false,
  },
  {
    imgSrc: "/files/img-2.jpeg",
    caption: "Man going to the beach",
    date: "February 2024",
    starred: true,
  },
  {
    imgSrc: "/files/img-3.jpeg",
    caption: "Dog trying to catch a ball.",
    date: "December 2023",
    starred: false,
  },
];

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Images</h1>
        <UploadButton />
      </div>

      <ul className="mt-8 w-full flex gap-8 flex-col divide-y divide-zinc-200">
        {images.map((image, index) => {
          return (
            <li key={index} className="w-full col-span-1 flex justify-center items-center flex-col md:flex-row divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg p-2">
              <div className="flex-[0.4] p-2 bg-black/5 border-[1px] border-black/10 rounded-md shadow-md">
                <Image src={image.imgSrc} width={560} height={360} className="rounded-md" alt="image 1" />
              </div>
              <div className="flex-[0.6] flex-col w-full p-2 text-center">
                <h1 className="font-bold text-4xl mb-4">{image.caption}</h1>
                <div className="flex justify-evenly p-3 w-full border-t border-b border-gray-200">
                  <div className="flex w-full justify-center items-center">
                    <Plus size={18} />
                    <p>{image.date}</p>
                  </div>
                  <div className="flex w-full justify-center items-center">
                    <Star style={{ fill: image.starred ? "#FEDA77" : "transparent", color: image.starred ? "#FEDA77" : "" }} />
                  </div>
                  <div className="flex w-full justify-center items-center bg-red-200 p-2 rounded-md">
                    <Trash style={{ color: "#ef4444" }} />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Dashboard
