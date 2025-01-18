import React from "react";
import axios from 'axios';

const vendorUpdateAccountBox:React.FC = () => {

    function updateDetails(){

    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="text"
                placeholder="organizationName"/>
                <input type="text"  placeholder="Main Company Address"/>
                <input type="text"  placeholder="Alternative Company Address"/>
                <input type="text" placeholder="website url" />
                <textarea placeholder="About"/>
                <button
                onClick={(e) => {
                    e.preventDefault();
                    updateDetails();
                }}
                type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
        
    )
}

export default vendorUpdateAccountBox;