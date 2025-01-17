import React from "react";
import Table from "./quote-table";
import Sidebar from "./compare-sidebar";

const ManageQuotes: React.FC = () => {
  return (
    <div className="grid grid-rows-[80px_1fr] mt-24 mb-4 w-5/6 mx-auto">
      <div className="text-left px-20 font-bold py-1 bg-white rounded-t-[20px] border-[5px] border-[#6AFAA8] h-16 text-4xl">
        Received Quotes:
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-4">
        <Sidebar />
        <div className="relative shadow-md border-4 w-full border-[#6AFAA8] h-fit bg-white min-h-screen mx-auto rounded-br-[22px]">     
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ManageQuotes;
