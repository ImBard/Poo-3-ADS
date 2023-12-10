import { SheetDemo } from "./side-bar";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-background p-6 sticky mb-10 top-0 w-full z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <SheetDemo />
      </div>
      <div>
        <a
          href="https://github.com/ImBard/Poo-3-ADS"  
          target="_blank"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-primary border-primary hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
        >
          POO_ATV_III
        </a>
      </div>
    </nav>
  )
}