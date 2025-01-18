import React from "react";

interface ProductProps {
  ProductName: string;
}

const ListElement: React.FC<ProductProps> = ({ProductName}) => {
  return (
    <li className="py-2 cursor-pointer border-b border-black text-center grid grid-cols-[1fr_20px] px-1 font-bold text-sm">
      {ProductName}
      <img src="src/assets/quote-details/chevron-right.png" alt="" className="h-full my-[0px]"/>
    </li>
  )
}

const ProductsSidebar: React.FC = () => {
  return (
    <div className="border border-black bg-[#f0f0f0]">
      <div className="text-center text-lg py-2 font-bold border-b border-1 border-black">Products</div>
      <ul>
        <ListElement ProductName="Product 1" />
        <ListElement ProductName="Product 2" />
      </ul>
    </div>
  );
}

export default ProductsSidebar;