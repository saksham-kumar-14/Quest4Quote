import React from 'react';

const Basic: React.FC = () => {
    return (
        <div>
            <img 
                src="/src/assets/buyer-dashboard/account.svg" 
                alt="Account" 
                className="w-28 h-28 mx-auto -my-2"
            />

            <div className="font-[600] text-lg text-center">Contact Name</div>
            <div className="text-sm text-center">Org.s Abbreviation</div>
            <div className="font-[500] text-sm text-center">City, Country</div>
        </div>
        );
};

export default Basic;