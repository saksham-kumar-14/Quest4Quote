import React, { useState } from "react";
import Sidebar from "./compare-sidebar";
import OverallComparison from "./compare-overall";
import ProductwiseComparison from "./compare-productwise";

var vendorList = ['Vendor-1', 'Vendor-2'];
// var width = (80+200+150+vendorList.length*200) + "px";


const CompareQuotes: React.FC = () => {
  const [compareShow, setcompareShow] = useState(false);
  
  return (
    <div className="grid grid-rows-[80px_1fr] mt-24 mb-4 w-5/6 mx-auto">
      <div className="text-left px-20 font-bold py-1 bg-white rounded-t-[20px] border-[5px] border-[#6AFAA8] h-16 text-4xl">
        Compare Received Quotes:
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-4 overflow-scroll">
        <Sidebar />
        <div className={`border-4 w-[full] border-[#6AFAA8] h-fit bg-white min-h-screen mx-auto rounded-br-[22px]`}>     
          {!compareShow ? <OverallComparison compareShow={[compareShow, setcompareShow]} vendorList={vendorList}/> : <ProductwiseComparison compareShow={[compareShow, setcompareShow]}/>}
        </div>
      </div>
    </div>
  );
};

export default CompareQuotes;
