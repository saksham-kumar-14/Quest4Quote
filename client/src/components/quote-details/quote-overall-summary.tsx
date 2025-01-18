import React from "react";
import TabBarQuote from "./quote-tab-bar";


const OverallSummary: React.FC<React.ComponentState> = ({quoteShow}) => {
  return (
    <div className={`p-0 border-b border-gray-300 ${!(quoteShow[0]) ? '' : 'hidden'}`} id="overall-summary">
      <TabBarQuote quoteShow={quoteShow}/>
      <div className="text-6xl text-center font-semibold mt-[5px] mb-[15px] w-full">Quote Details</div>
      <div className=" table-fixed bg-slate-50 w-[100.01%] ">
        <div>
          <div className="text-left text-lg font-medium bg-[#1AA566] grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
            <div className="p-2 border border-gray-300 border-l-0 text-center text-[15px]">S. No.</div>
            <div className="p-2 border border-gray-300 text-center">Description</div>
            <div className="p-2 border border-gray-300 text-center">Qty.</div>
            <div className="p-2 border border-gray-300 text-center">Status</div>
            <div className="p-2 border border-gray-300 border-r-0 text-center">Price</div>
          </div>
        </div>
        <div className="w-full">
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">1. </div>
              <div className="p-2 border-l ">Product-1</div>
              <div className="p-2 border-l ">10</div>
              <div className="p-2 border-l ">Accepted</div>
              <div className="p-2 border-l  grid grid-cols-[1fr_20px]">
                12500
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">2. </div>
              <div className="p-2 border-l ">Product-2</div>
              <div className="p-2 border-l ">21</div>
              <div className="p-2 border-l ">Accepted</div>
              <div className="p-2 border-l  grid grid-cols-[1fr_20px]">
                13905
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">3. </div>
              <div className="p-2 border-l ">Product-3</div>
              <div className="p-2 border-l ">8</div>
              <div className="p-2 border-l ">Rejected</div>
              <div className="p-2 border-l  grid grid-cols-[1fr_20px]">
                25632
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t text-center bg-white grid grid-cols-[4fr_2fr_2fr_2fr]">
              <div className="p-2 border-l">Total</div>
              <div className="p-2 border-l">39</div>
              <div className="p-2 border-l w-[99%] grid grid-cols-[1fr_20px]">
              2
              <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px]">
                52037
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t border-white text-center grid grid-cols-[6fr_4fr] text-[#6AFAA8] bg-[#090D11]">
              <div className="p-2 border-l">Accepted Total</div>
              <div className="p-0 border-l grid grid-cols-[1fr_36px]">
                <div className="pt-2">
                  26405
                </div>
                <div className="bg-[#6AFAA8] h-9 w-9 p-[10px]">
                  <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
                </div>
              </div>
            </div>
            <div className="text-sm border-t  border-white text-center grid grid-cols-[6fr_4fr] text-[#6AFAA8] bg-[#090D11]">
              <div className="p-2 border-l">Delivery Estimate</div>
              <div className="p-0 border-l grid grid-cols-[1fr_36px]">
                <div className="pt-2">
                  7 Days
                </div>
                <div className="bg-[#6AFAA8] h-9 w-9 p-[10px] border-solid border-y-[#090D11]">
                  <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
                </div>
              </div>
            </div>
            <div className="text-sm border-t text-center grid grid-cols-[6fr_4fr] text-[#6AFAA8] bg-[#090D11]">
              <div className="p-2 border-l">Quote Status</div>
              <div className="p-0 border-l grid grid-cols-[1fr_36px]">
                <div className="pt-2">
                  Partially accepted
                </div>
                <div className="bg-[#6AFAA8] h-9 w-9 p-[10px]">
                  <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OverallSummary;