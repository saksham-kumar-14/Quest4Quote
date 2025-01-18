import React from "react";

const TabBarQuote: React.FC<React.ComponentState> = ({quoteShow}) => {
  return (
    <div className="bg-[#6AFAA8] rounded-t-[10px]">
          <button id='product' onClick={() => {
            console.log("product");
            quoteShow[1](false);
          }} className={`w-1/2 p-4 font-semibold ${quoteShow[0] ? 'bg-[#090D11] text-[#6AFAA8]' : 'bg-[#6AFAA8] text-[#090D11]'}`}>
            Product-Wise Summary
          </button>
          <button  id='overall' onClick={() => {
            console.log("overall");
            quoteShow[1](false);
          }} className={`w-1/2 p-4 font-semibold ${!(quoteShow[0]) ? 'bg-[#090D11] text-[#6AFAA8]' : 'bg-[#6AFAA8] text-[#090D11]'}`}>
            Overall Summary
          </button>
        </div>
  );
}

export default TabBarQuote;