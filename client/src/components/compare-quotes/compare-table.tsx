import React from "react";
import TabBarQuote from "./compare-tab-bar";

const Table: React.FC = () => {
  return (
    <div className="p-0 border-b border-[#090D11]">
      <TabBarQuote />
      <div className="text-6xl text-center font-semibold mt-[5px] mb-[15px] w-full">Compare Quotes:</div>
      <div className=" table-fixed bg-slate-50 w-[100.01%] ">
        <div>
          <div className="text-left font-medium bg-[#1AA566] grid grid-cols-[1fr_3fr_2fr_4fr]">
            <div className="p-2 py-6 text-lg border border-[#090D11] border-l-0 text-center text-[15px]">S. No.</div>
            <div className="p-2 py-6 border text-lg border-[#090D11] text-center">Description</div>
            <div className="p-2 py-6 border text-lg border-[#090D11] text-center">Qty.</div>
            <div className="grid grid-rows-2">
              <div className="text-center py-1 text-lg">
                Vendor
              </div>
              <div className="grid grid-cols-2">
                <div className="p-2 border border-[#090D11] text-center">Vendor-1</div>
                <div className="p-2 border border-[#090D11] border-r-0 text-center">Vendor-2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">1. </div>
              <div className="p-2 border-l ">Product-1</div>
              <div className="p-2 border-l ">10</div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px] bg-[#6AFAA8]">
                12500
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px]">
                22500
              </div>
            </div>
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">2. </div>
              <div className="p-2 border-l ">Product-2</div>
              <div className="p-2 border-l ">21</div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px] bg-[#6AFAA8]">
                13905
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px]">
                22705
              </div>
            </div>
            <div className="text-sm border-t text-center grid grid-cols-[1fr_3fr_2fr_2fr_2fr]">
              <div className="p-2 ">3. </div>
              <div className="p-2 border-l ">Product-3</div>
              <div className="p-2 border-l ">8</div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px]">
                25632
              </div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px] bg-[#6AFAA8]">
                10985
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t text-center bg-white grid grid-cols-[4fr_2fr_2fr_2fr]">
              <div className="p-2 border-l">Total</div>
              <div className="p-2 border-l">39</div>
              <div className="p-2 border-l w-[99%] grid grid-cols-[1fr_20px]">
                52037
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
              <div className="p-2 border-l grid grid-cols-[1fr_20px]">
                56160
                <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/>
              </div>
            </div>
            <div className="text-sm border-t border-white text-center grid grid-cols-[6fr_4fr] text-[#6AFAA8] bg-[#090D11]">
              <div className="p-2 border-l">Lowest Total</div>
              <div className="p-0 border-l grid grid-cols-[1fr_36px]">
                <div className="pt-2">
                  37390
                </div>
                <div className=" bg-[#6AFAA8] h-9 w-9 p-[10px]">
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
        </div>
      </div>
    </div>
  );
}

export default Table;