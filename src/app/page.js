import GridButton from './grid-button'
import dynamic from "next/dynamic";

const DynamicSearchDialog = dynamic(() => import('./components/search-dialog'), { ssr: false });

import fs from 'fs'

function getData() {
  return JSON.parse(fs.readFileSync('src/app/data/puzzle.json', 'utf8'));
}

export default function Home() {
  const data = getData().puzzle;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="pt-12">
        <div className="flex">
          <div className="w-20 sm:w-36 md:w-48"></div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src={"/logos/"+data[0]+".svg"}
              className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src={"/logos/"+data[1]+".svg"}
              className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <div
              className="px-4 h-12 sm:h-20 md:h-24 text-sm sm:text-xl md:text-2xl text-center text-gray-800 flex items-center font-display uppercase font-bold leading-tight">
              <div>
                <div className="leading-tight">{data[2]}</div>
              </div>
            </div>
          </div>
          <div className="sm:w-36 md:w-48"></div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src={"/logos/"+data[3]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src={"/logos/"+data[4]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src={"/logos/"+data[5]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
          </div>
          <div className="bg-white rounded-xl border grid grid-cols-3 overflow-hidden">
            <GridButton
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
          </div>
        </div>
      </div>
      <DynamicSearchDialog></DynamicSearchDialog>
    </main>
  )
}
