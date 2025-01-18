import React from "react";
import TabBarQuote from "./compare-tab-bar";

interface HeaderProps{
  vendorList: string[]
}

const OverallTableHeader: React.FC<HeaderProps> = ({vendorList}) => {
  var width = "80px_200px_150px_" + (vendorList.length * 200) + "px";
  return (
    <div className={`text-left font-medium bg-[#1AA566] grid grid-cols-[${width}]`}>
      <div className="p-2 py-6 text-lg border border-[#090D11] border-l-0 text-center text-[1em]">S. No.</div>
      <div className="p-2 py-6 border text-lg border-[#090D11] text-center">Description</div>
      <div className="p-2 py-6 border text-lg border-[#090D11] text-center">Quantity</div>
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
  );
}

interface OverallTableItemProps {
  itemNo: number;
  productName: string;
  quantity: number;
  vendorPrices: number[];
}
var bestTotal = 0;
const OverallTableItem: React.FC<OverallTableItemProps> = ({itemNo, productName, quantity, vendorPrices}) => {
  const minVendorPrice = Math.min(...vendorPrices);
  var width2 =  "80px_200px_150px";
  for(var i = 0; i < vendorPrices.length; i++){
    width2 += "_200px";
  }
  bestTotal += minVendorPrice;
  return (
    <div className={`text-sm border-t text-center grid grid-cols-[${width2}]`}>
      <div className="p-2 ">{itemNo}.</div>
      <div className="p-2 border-l ">{productName}</div>
      <div className="p-2 border-l ">{quantity}</div>
      {vendorPrices.map((item, index) => (
        <div key={index} className={`p-2 border-l grid grid-cols-[1fr_20px] ${item == minVendorPrice ? 'bg-[#6AFAA8]' : ''}`}>
          {item}
          {item == minVendorPrice ? <img src="/src/assets/quote-details/chevron-down.png" alt="" className="w-4 h-4"/> : ''}
        </div>
      ))}
    </div>
  );
}

interface ComparisonProps{
  compareShow: React.ComponentState;
  vendorList: string[];
}

const OverallComparison: React.FC<ComparisonProps> = ({compareShow, vendorList}) => {
  var width = (80+200+150+vendorList.length*200) + "px";
  return (
    <div className={`p-0 border-b border-[#090D11] ${compareShow[0] ? 'hidden' : ''}`}>
      <TabBarQuote compareShowState={compareShow}/>
      <div className="text-6xl text-center font-semibold mt-[5px] mb-[15px] w-full">Compare Quotes:</div>
      <div className=" table-fixed bg-slate-50 w-[100.01%] ">
        <div>
          <OverallTableHeader vendorList={vendorList}/>
        </div>
        <div className="w-full">
            <OverallTableItem itemNo={1} productName="Product-1" quantity={10} vendorPrices={[12500, 22500]} />
            <OverallTableItem itemNo={2} productName="Product-2" quantity={21} vendorPrices={[13905, 22705]} />
            <OverallTableItem itemNo={3} productName="Product-3" quantity={8} vendorPrices={[25632, 10985]} />
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

export default OverallComparison;