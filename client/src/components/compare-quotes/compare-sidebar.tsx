import React from "react";

interface QuoteProps {
  QuoteCode: string;
}

const ListElement: React.FC<QuoteProps> = ({QuoteCode}) => {
  return (
    <li className="py-2 cursor-pointer border-b border-black text-center grid grid-cols-[1fr_20px] px-2 text-sm font-bold">
      {QuoteCode}
      <img src="src/assets/quote-details/chevron-right.png" alt="" className="w-5 h-5 my-[0px]"/>
    </li>
  )
}

const Sidebar: React.FC = () => {
  return (
    <div className="border-[#6AFAA8] border-4 rounded-bl-[20px] bg-white">
      <div className="text-center text-[24px] py-[9px] border-b font-bold border-black">Quotes</div>
      <ul>
        <ListElement QuoteCode="Quote 1" />
        <ListElement QuoteCode="Quote 2" />
        <ListElement QuoteCode="Quote 3" />
      </ul>
    </div>
  );
}

export default Sidebar;