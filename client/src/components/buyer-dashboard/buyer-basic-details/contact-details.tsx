import React from 'react';

const ContactDetails: React.FC = () => {
    return (
        <div>
            <div className="font-bold text-2xl text-center">Contact Details: </div>
            <div className="grid grid-cols-[70px_auto] gap-x-[5px] gap-y-4 my-5">
                <div className="font-semibold text-right align-middle">email Address:</div>
                <div className='align-middle'>John Doe</div>
                <div className="font-semibold text-right">Phone:</div>
                <div className='align-middle'>john.doe@example.com</div>
                <div className="font-semibold text-right">Website:</div>
                <div className='align-middle'>+1234567890</div>
            </div>
        </div>
        );
};

export default ContactDetails;