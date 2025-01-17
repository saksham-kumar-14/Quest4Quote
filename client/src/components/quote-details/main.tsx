import React from "react";
import Table from "./table-quote";
import Terms from "./chart";
import AddDetails from "./add-details";

const ManageQuotes: React.FC = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4 my-24 w-5/6 mx-auto">
        <div className="row-span-1 col-span-2 text-center font-bold py-1 bg-white rounded-[20px] border-[#6AFAA8] h-20 text-6xl">
          Heading
        </div>
        <div className="row-span-1 col-span-1 bg-gray-200 p-4">
          <ul>
            <li className="py-2 cursor-pointer">Tab 1</li>
            <li className="py-2 cursor-pointer">Tab 2</li>
            <li className="py-2 cursor-pointer">Tab 3</li>
          </ul>
        </div>
      <div className=" relative shadow-md max-w-6xl px-0 w-5/6 border-4 border-[#6AFAA8] h-fit bg-white min-h-screen mt-[80px] mx-auto rounded-[22px]">     
        <Table />
        <Terms />
        <AddDetails />
        <div className="p-4 text-right">
          <button className="bg-[#090D11] text-[#6AFAA8] font-bold px-4 py-2 rounded-[20px]">
        Create RFQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageQuotes;
