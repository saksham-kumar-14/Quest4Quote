import React from "react";
import TabBar from "./tab-bar";
import Table from "./table";
import Terms from "./terms-and-conditions";
import AddDetails from "./add-details";

const CreateRFQ: React.FC = () => {
  return (
      <div className=" relative shadow-md max-w-6xl px-0 w-5/6 border-4 border-[#6AFAA8] h-fit bg-white min-h-screen mt-[80px] mx-auto rounded-[22px]">     
        <TabBar />
        <Table />
        <Terms />
        <AddDetails />
        <div className="p-4 text-right">
          <button className="bg-[#090D11] text-[#6AFAA8] font-bold px-4 py-2 rounded-[20px]">
        Create RFQ
          </button>
        </div>
      </div>
  );
};

export default CreateRFQ;
