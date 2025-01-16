import React from "react";

const Table: React.FC = () => {
  return (
    <div className="p-0 border-b border-gray-300">
            <table className="w-full table-fixed">
            <thead>
              <tr className="text-left text-sm font-medium bg-gray-100">
              <th className="w-1/12 p-2 border border-gray-300">Product Name</th>
              <th className="w-4/12 p-2 border border-gray-300">Size, Specification and Quantity</th>
              <th className="w-2/12 p-2 border border-gray-300">TDS</th>
              <th className="w-2/12 p-2 border border-gray-300">QAP</th>
              <th className="w-2/12 p-2 border border-gray-300">Comments</th>
              <th className="w-1/12 p-2 border border-gray-300">Action</th>
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
                    <button className="bg-[#6AFAA8] text-[#090D11] h-[40px] px-3 py-1 rounded mt-2">Upload</button>
                  </td>
                    <td className="p-2 border border-gray-300">
                      <div className="flex gap-2 text-[10px]">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-[12px]">Select File</label>
                          <button className="bg-green-500 text-white px-3 py-1 rounded text-[10px] h-[30px] align-middle">View</button>
                      </div>
                      OR
                      <div className="mt-2 text-[10px]">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded ml-2 text-[10px] h-[30px]">Upload</button>
                      </div>
                    </td>
                  <td className="p-2 border border-gray-300">
                    <div className="flex gap-2 text-[10px]">
                      <input type="checkbox" className="mr-2" />
                      <label className="text-[12px]">Select File</label>
                        <button className="bg-green-500 text-white px-3 py-1 rounded text-[10px] h-[30px] align-middle">View</button>
                    </div>
                      OR
                    <div className="mt-2 text-[10px]">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded ml-2 text-[10px] h-[30px]">Upload</button>
                    </div>
                  
                  </td>
                  <td className="p-2 border border-gray-300">
                    <input type="text" placeholder="Comments" className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="p-2 border border-gray-300">
                    <div className="grid grid-rows-2 gap-2">
                      <button className="bg-gray-500 text-white px-3 py-1 rounded h-[40px]">Remove</button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded h-[40px] ">Add Variant</button>
                    </div>
                  </td>
                </tr>
            </tbody>
            </table>
        </div>
  );
}

export default Table;