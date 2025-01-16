import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="p-4">
          <h3 className="font-semibold mb-2">Terms and Conditions:</h3>
          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              First term to be displayed here
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Second term to be displayed here
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Third term to be displayed here
            </label>
          </div>

          {/* Additional Terms */}
          <textarea
            placeholder="Add Additional Terms and Conditions"
            className="w-full border rounded mt-4 p-2"
          ></textarea>
        </div>

  );
}

export default Terms;