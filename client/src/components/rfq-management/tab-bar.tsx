import React from "react";

const TabBar: React.FC = () => {
  return (
    <div className="flex w-full">
          <button className="w-1/2 p-4 bg-[#6AFAA8] text-[#090D11] font-semibold rounded-tl-lg">
            Create RFQ
          </button>
          <button className="w-1/2 p-4 bg-[#090D11] font-semibold text-[#6AFAA8] rounded-tr-lg">
            Manage RFQs
          </button>
        </div>
  );
}

export default TabBar;