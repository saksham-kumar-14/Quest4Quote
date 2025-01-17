import React from "react";
import TabBarQuote from "./tab-bar-quote";

const Table: React.FC = () => {
  return (
    <div className="p-0 border-b border-gray-300">
      <TabBarQuote />
      <div className="text-6xl text-center font-semibold mt-[5px] mb-[15px]">Quote Details</div>
      <table className="w-full table-fixed">
      <thead>
        <tr className="text-left text-sm font-medium bg-gray-100">
        <th className="w-1/12 p-2 border border-gray-300 text-center">Product Name</th>
        <th className="w-3/12 p-2 border border-gray-300 text-center">Size, Specification and Quantity</th>
        <th className="w-2/12 p-2 border border-gray-300 text-center">TDS</th>
        <th className="w-2/12 p-2 border border-gray-300 text-center">QAP</th>
        <th className="w-2/12 p-2 border border-gray-300 text-center">Comments</th>
        <th className="w-1/12 p-2 border border-gray-300 text-center">Selected Vendors</th>
        <th className="w-1/12 p-2 border border-gray-300 text-centerss">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr className="text-sm border-t border-gray-300 text-center">
            <td className="p-2 border border-gray-300">Steel</td>
            <td className="p-2 border border-gray-300">
              <div className="flex gap-2">
                <input type="text" placeholder="Size" className="border rounded px-2 py-1 w-1/3" />
                <input type="text" placeholder="Specifications" className="border rounded px-2 py-1 w-1/3" />
                <input type="text" placeholder="Quantity" className="border rounded px-2 py-1 w-1/3" />
              </div>
              OR &nbsp;
              <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] mt-2">Upload</button>
            </td>
              <td className="p-2 border border-gray-300">
                <div className="flex gap-2 text-[10px]">
                  <input type="checkbox" className="mr-2 w-[15px]" />
                  <label className="text-[12px] align-middle p-[2px]"><span className="align-middle">Select File</span></label>
                    <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] text-[10px] h-[30px] align-middle ">View</button>
                </div>
                OR
                <div className="mt-2 text-[10px]">
                  <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] ml-2 text-[10px] h-[30px]">Upload</button>
                </div>
              </td>
            <td className="p-2 border border-gray-300">
              <div className="flex gap-2 text-[10px]">
                <input type="checkbox" className="mr-2 w-[15px]" />
                <label className="text-[12px] p-[2px]"><span className="align-middle ">Select File</span></label>
                  <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] text-[10px] h-[30px] align-middle">View</button>
              </div>
                OR
              <div className="mt-2 text-[10px]">
                <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] text-[10px] h-[30px]">Upload</button>
              </div>
            
            </td>
            <td className="p-2 border border-gray-300">
              <input type="text" placeholder="Comments" className="border rounded px-2 py-1 w-full" />
            </td>
            <td className="p-2 border border-gray-300">
              <div className="">
                <button className="bg-[#090D11] text-[#6AFAA8] px-3 py-1 rounded-[10px] h-[80px]">View Selcted Vendors</button>
              </div>
            </td>
            <td className="p-2 border border-gray-300">
              <div className="grid grid-rows-2 gap-2">
                <button className="bg-[#6AFAA8] text-[#090D11] px-3 py-1 rounded-[20px] border-[1px] border-[#090D11] h-[40px]">Remove</button>
                <button className="bg-[#090D11] text-[#6AFAA8] rounded-[20px] px-1 -py-1 h-[40px] text-[12px]">Add Variant</button>
              </div>
            </td>
          </tr>
      </tbody>
      </table>
    </div>
  );
}

export default Table;