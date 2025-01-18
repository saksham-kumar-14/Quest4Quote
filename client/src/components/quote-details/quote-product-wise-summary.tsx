import React from "react";
import TabBarQuote from "./quote-tab-bar";
import ProductCard from "./product-card";



const ProductwiseSummary: React.FC<React.ComponentState> = ({quoteShow}) => {
  return (
    <div className={`p-0 ${quoteShow[0] ? '' : 'hidden'}`} id="product-wise-summary">
      <TabBarQuote quoteShow={quoteShow}/>
      <div className={`text-6xl text-center font-semibold mt-[5px] mb-[15px] w-full`}>Quote Details</div>
      <ProductCard />
    </div>
  );
}

export default ProductwiseSummary;