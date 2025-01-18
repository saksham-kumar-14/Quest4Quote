import React from "react";
import TabBarQuote from "./compare-tab-bar";
import ProductDetails from "./product-details";
import ProductHeader from "./product-details-header";

const ProductwiseComparison: React.FC<React.ComponentState> = ({compareShow}) => {
  return (
    <div className={`p-0 border-b border-[#090D11] ${!compareShow ? 'hidden' : ''}`}>
      <TabBarQuote />
      <div className="text-6xl text-center font-semibold mt-[5px] mb-[15px] w-full">Product-Wise Comparison:</div>
      <div className="grid grid-cols-[100px_1fr] bg-slate-50">
        <div className="bg-white"></div>
        <div className="flex w-full">
          <ProductHeader />
          <ProductDetails vendorName="Vendor-1" unitRate={1000} quantity={10} packaging={4} frieght={3} gst={18} selected={true}/>
          <ProductDetails vendorName="Vendor-2" unitRate={1100} quantity={10} packaging={4} frieght={3} gst={18} selected={false}/>
        </div>
      </div>
    </div>
  );
}

export default ProductwiseComparison;