import GridButton from './grid-button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="pt-12">
        <div className="flex">
          <div className="w-20 sm:w-36 md:w-48">

          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src="/logos/49ers.svg"
              className="dark:hidden w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <img
              src="/logos/panthers.svg"
              className="dark:hidden w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
          </div>
          <div className="flex items-center justify-center w-24 sm:w-36 md:w-48 h-16 sm:h-24 md:h-36">
            <div
              className="px-4 h-12 sm:h-20 md:h-24 text-sm sm:text-xl md:text-2xl text-center text-gray-800 dark:text-white flex items-center font-display uppercase font-bold leading-tight">
              <div>
                <div className="leading-tight">10+ TD Season</div>
              </div>
            </div>
          </div>
          <div className="sm:w-36 md:w-48"></div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src="/logos/cowboys.svg"
                className="dark:hidden w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src="/logos/ravens.svg"
                className="dark:hidden w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
            <div className="flex items-center justify-center w-20 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48">
              <img
                src="/logos/dolphins.svg"
                className="dark:hidden w-16 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-950 grid grid-cols-3 overflow-hidden">
            <GridButton
              classes="border-r border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="border-r hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
            <GridButton
              classes="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 transition-colors duration-75 overflow-hidden dark:border-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#59d185] focus-visible:z-50"></GridButton>
          </div>
        </div>
      </div>
    </main>
  )
}
