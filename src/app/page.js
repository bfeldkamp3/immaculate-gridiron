import GridButton from './grid-button'
import dynamic from "next/dynamic";
import fs from 'fs'

const DynamicSearchDialog = dynamic(() => import('./components/search-dialog'), { ssr: false });

function getData() {
  const today = (new Date()).toLocaleDateString();
  return JSON.parse(fs.readFileSync('src/app/data/puzzles.json', 'utf8'))[today];
}

function fetchPlayers() {
  const players = JSON.parse(fs.readFileSync('src/app/data/stats/nflPlayers.json', 'utf8'));
  return players;
}

export default function Home() {
  const data = getData();
  const players = fetchPlayers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="pt-12">
        <div className="flex">
          <div className="w-20 sm:w-36 md:w-48"></div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src={"/"+data[0]+".svg"}
              className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src={"/"+data[1]+".svg"}
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
                src={"/"+data[3]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src={"/"+data[4]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src={"/"+data[5]+".svg"}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
          </div>
          <div className="bg-white rounded-xl border grid grid-cols-3 overflow-hidden">
            <GridButton id="gridButt1" grid={{row: 1, col: 1, team1: data[3], team2: data[0], award:"", id: "gridButt1" }}
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt2" grid={{row: 1, col: 2, team1: data[3], team2: data[1], award:"", id: "gridButt2" }}
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt3" grid={{row: 1, col: 3, team1: data[3], team2: "", award: data[2], id: "gridButt3" }}
              classes="border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt4" grid={{row: 2, col: 1, team1: data[4], team2: data[0], award:"", id: "gridButt4" }}
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt5" grid={{row: 2, col: 2, team1: data[4], team2: data[1], award: "", id: "gridButt5" }}
              classes="border-r border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt6" grid={{row: 2, col: 3, team1: data[4], team2: "", award:data[2], id: "gridButt6" }}
              classes="border-b hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt7" grid={{row: 3, col: 1, team1: data[5], team2: data[0], award:"", id: "gridButt7" }}
              classes="border-r hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt8" grid={{row: 3, col: 2, team1: data[5], team2: data[1], award:"", id: "gridButt8" }}
              classes="border-r hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton id="gridButt9" grid={{row: 3, col: 3, team1: data[5], team2: "", award: data[2], id: "gridButt9" }}
              classes="hover:bg-gray-100 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
          </div>
        </div>
      </div>
      <DynamicSearchDialog players={players}></DynamicSearchDialog>
    </main>
  )
}
