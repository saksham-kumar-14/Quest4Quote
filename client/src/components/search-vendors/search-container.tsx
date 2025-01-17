import React from "react";
import Sidebar from "./search-sidebar";
import SearchBar from "./search-bar";
import VendorList from "./search-table";

const ManageQuotes: React.FC = () => {
  return (
    <div className="grid grid-rows-[80px_1fr] mt-24 mb-4 w-5/6 mx-auto">
      <SearchBar />
      <div className="grid grid-cols-[120px_1fr] gap-4">
        <Sidebar />
        <div className="relative shadow-md border-4 w-full border-[#6AFAA8] h-fit bg-white min-h-screen mx-auto rounded-br-[22px]">     
          <VendorList />
        </div>
      </div>
    </div>
  );
};

export default ManageQuotes;
