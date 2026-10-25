import Header from "@/components/Header";
import {
  BoltIcon,
  CalendarDaysIcon,
  ClockIcon,
  RotateCcwClockIcon,
  SquareCheckIcon,
} from "lucide-react";

const page = () => {
  return (
    <div className="w-1/3 max-w-2xl h-screen mx-auto bg-[#0e0f11] p-5 relative">
      <Header />

      <div className="absolute inset-x-5 bottom-5 z-50 flex rounded-full overflow-hidden bg-white/10 backdrop-blur-md">
        <button className="flex flex-1 justify-center py-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
          <SquareCheckIcon />
        </button>
        <button className="flex flex-1 justify-center py-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
          <ClockIcon />
        </button>
        <button className="flex flex-1 justify-center py-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
          <CalendarDaysIcon />
        </button>
        <button className="flex flex-1 justify-center py-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
          <RotateCcwClockIcon />
        </button>
        <button className="flex flex-1 justify-center py-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
          <BoltIcon />
        </button>
      </div>
    </div>
  );
};
export default page;
