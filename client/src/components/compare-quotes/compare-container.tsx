import React, { useState } from "react";
import Sidebar from "./compare-sidebar";
import OverallComparison from "./compare-overall";
import ProductwiseComparison from "./compare-productwise";

const CompareQuotes: React.FC = () => {
  const [compareShow, setcompareShow] = useState(true);
  
  const product = document.getElementById('product');
  const overall = document.getElementById('overall');
  console.log("P1", product);
  console.log("P2", overall);

  function toggle1() {
    console.log("toggle1");
    setcompareShow(true);
  }

  function toggle2() {
    console.log("toggle2");
    setcompareShow(false);
  }

  overall?.addEventListener('click', () => {
    toggle2();
  });

  product?.addEventListener('click', () => {
    toggle1();
  });
  return (
    <div className="grid grid-rows-[80px_1fr] mt-24 mb-4 w-5/6 mx-auto">
      <div className="text-left px-20 font-bold py-1 bg-white rounded-t-[20px] border-[5px] border-[#6AFAA8] h-16 text-4xl">
        Compare Received Quotes:
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-4">
        <Sidebar />
        <div className="relative shadow-md border-4 w-full border-[#6AFAA8] h-fit bg-white min-h-screen mx-auto rounded-br-[22px]">     
        {!compareShow ? <OverallComparison compareShow={[compareShow, setcompareShow]} /> : <ProductwiseComparison compareShow={[compareShow, setcompareShow]}/>}
        </div>
      </div>
    </div>
  );
};

export default CompareQuotes;
