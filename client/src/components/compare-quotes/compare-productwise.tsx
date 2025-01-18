import React from "react";
import TabBarQuote from "./compare-tab-bar";
import ProductDetails from "./product-details";
import ProductHeader from "./product-details-header";
import ProductsSidebar from "./products-sidebar";

const ProductwiseComparison: React.FC<React.ComponentState> = ({compareShow}) => {
  return (
    <div className={`p-0 ${!(compareShow[0]) ? 'hidden' : ''}`}>
      <TabBarQuote compareShowState={compareShow}/>
      <div className="text-4xl p-2 text-center font-semibold mt-[5px] mb-[15px] w-full">Product-Wise Comparison:</div>
      <div className="grid grid-cols-[100px_1fr] gap-2 bg-slate-50">
        <ProductsSidebar />
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