import React from "react";

const AddDetails: React.FC = () => {
  return (
    <div className="p-4 border-t border-gray-300">
          <h3 className="font-semibold mb-2">Add Details:</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-2 py-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded px-2 py-1"
            />
            <input
              type="tel"
              placeholder="Phone no."
              className="border rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="Organization name"
              className="border rounded px-2 py-1"
            />
            <select className="border rounded px-2 py-1">
              <option>Select Location</option>
              <option>Location 1</option>
              <option>Location 2</option>
            </select>
            <input
              type="date"
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
  );
}

export default AddDetails;