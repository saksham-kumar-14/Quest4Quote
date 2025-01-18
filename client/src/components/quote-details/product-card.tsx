import React from "react";

const ProductCard: React.FC = () => {
    return (
        <div className="w-[90%] shadow-xl h-[400px] bg-[#f1f1f1] mx-auto my-5 rounded-xl grid grid-cols-[150px_1fr] gap-4 p-4">
            <div className="grid grid-rows-[80px_1fr] gap-4 my-3">
                <div className="rounded-xl mx-auto">
                    <img src="/src/assets/quote-details/steel.jpg" alt="Steel" className="rounded-xl h-[80px] overflow-hidden"/>
                </div>
                <div className="flex flex-col justify-evenly rounded-xl text-center py-5 px-2">
                    <div className="">Product Name</div>
                    <div className="">Seller</div>
                    <div className="">Rate</div>
                    <div className="">Specifications</div>
                    <div className="">Cost</div>
                </div>
            </div>
            <div className="text-center py-[170px] rounded-xl">Chart Here</div>
        </div>
    );
}

export default ProductCard;