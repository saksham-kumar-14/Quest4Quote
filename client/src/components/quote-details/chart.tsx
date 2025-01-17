import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="p-4">
          <h3 className="font-semibold mb-2">Terms and Conditions:</h3>
            <ul className="list-none space-y-2 text-left">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 w-[15px]" />
                <span>First term to be displayed here</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 w-[15px]" />
                <span>Second term to be displayed here</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 w-[15px]" />
                <span>Third term to be displayed here</span>
              </li>
            </ul>

          {/* Additional Terms */}
          <textarea
            placeholder="Add Additional Terms and Conditions"
            className="w-full border rounded mt-4 p-2"
          ></textarea>
        </div>

  );
}

export default Terms;