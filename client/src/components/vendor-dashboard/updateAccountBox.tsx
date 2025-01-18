import React from "react"

const updateAccountBox:React.FC = ({ user }) => {

    function updateDetails(){

    }

    return(
        <div>
            <form>
                <input type="text"  placeholder="Main Company Address"/>
                <input type="text"  placeholder="Alternative Company Address"/>
                <input type="text" placeholder="website url" />
                <textarea placeholder="About"/>
                <button
                onClick={(e) => {
                    e.preventDefault();
                    updateDetails
                }}
                type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
        
    )
}

export default updateAccountBox;