import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="border-[5px] border-[#6AFAA8] rounded-bl-[20px] bg-white">
      <div className="text-center text-[24px] py-[9px] border-b font-bold border-black">Quotes</div>
      <ul>
        <li className="py-2 cursor-pointer border-b border-black text-center grid grid-cols-[1fr_20px] px-2 text-sm font-bold">
          Quote 1
          <img src="src/assets/quote-details/chevron-right.png" alt="" className="w-5 h-5 my-[0px]"/>
        </li>
        <li className="py-2 cursor-pointer border-b border-black text-center grid grid-cols-[1fr_20px] px-2 text-sm font-bold">
          Quote 2
          <img src="src/assets/quote-details/chevron-right.png" alt="" className="w-5 h-5 my-[0px]"/>
        </li>
        <li className="py-2 cursor-pointer border-b border-black text-center grid grid-cols-[1fr_20px] px-2 text-sm font-bold">
          Quote 3
          <img src="src/assets/quote-details/chevron-right.png" alt="" className="w-5 h-5 my-[0px]"/>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;