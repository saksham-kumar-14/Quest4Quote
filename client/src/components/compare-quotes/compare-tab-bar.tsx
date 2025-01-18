import React from "react";

const TabBarQuote: React.FC<React.ComponentState> = ({compareShowState}) => {
  return (
    <div className="bg-[#6AFAA8]">
          <button className={`w-1/2 p-4 font-semibold ${!(compareShowState[0]) ? 'bg-[#6AFAA8] text-[#090D11]' : 'bg-[#090D11] text-[#6AFAA8]'}`} id="product-compare" onClick={() => compareShowState[1](true)}>
            Product-Wise Summary
          </button>
          <button className={`w-1/2 p-4 font-semibold" id="product-compare ${(compareShowState[0]) ? 'bg-[#6AFAA8] text-[#090D11]' : 'bg-[#090D11] text-[#6AFAA8]'}`} id="overall-compare" onClick={() => compareShowState[1](false)}>
            Overall Summary
          </button>
        </div>
  );
}

export default TabBarQuote;