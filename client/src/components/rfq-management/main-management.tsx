import React from "react";
import TabBar from "./tab-bar";
import Table from "./table";
import Terms from "./terms-and-conditions";
import AddDetails from "./add-details";

const CreateRFQ: React.FC = () => {
  return (
    <div className="p-1 h-fit w-4/6 bg-[#6AFAA8] min-h-screen z-20 mt-[80px] mx-auto rounded-[11px]">
      <div className="bg-white rounded-lg shadow-md max-w-4xl mx-auto px-0 w-full">     
        <TabBar />
        <Table />
        <Terms />
        <AddDetails />
        <div className="p-4 text-right">
          <button className="bg-[#6AFAA8] text-[#090D11] px-4 py-2 rounded">
            Create RFQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRFQ;
