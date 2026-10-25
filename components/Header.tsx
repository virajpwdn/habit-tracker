import { ChevronDownIcon, EllipsisIcon, SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-0.5 items-center">
          <h1 className="font-bold font-montserrat text-xl">Daily</h1>
          <ChevronDownIcon
            width={16}
            className="font-semibold cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-3 bg-white/20 p-2 backdrop-blur-md rounded-full transition-colors duration-200 hover:bg-white/40">
          <SearchIcon width={20} className="cursor-pointer " />
          <EllipsisIcon width={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Header;
