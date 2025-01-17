import React from "react";

const TabBarQuote: React.FC = () => {
  return (
    <div className="bg-[#6AFAA8] rounded-t-[10px]">
          <button className="w-1/2 p-4 bg-[#6AFAA8] text-[#090D11] font-semibold rounded-tl-[20px]">
            Product-Wise Summary
          </button>
          <button className="w-1/2 p-4 bg-[#090D11] font-semibold text-[#6AFAA8] rounded-tr-[20px]">
            Overall Summary
          </button>
        </div>
  );
}

export default TabBarQuote;