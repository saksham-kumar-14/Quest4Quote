import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="flex justify-between px-4 h-[200px] bg-[#0A0D11] text-[#6AFAAB] -z-10  items-end pb-[15px] -mt-[150px]" style={{zIndex: -10}}>
            <div className="text-left">
                <p>&copy; Copyrights 2025, Quest4Quote | All rights reserved</p>
            </div>
            <div className="width-fit flex items-center">
                <img src="/src/assets/footer/linkedin.svg" alt="" className='size-6 bg-white rounded-[5px]'/>&nbsp;LinkedIn&nbsp;|&nbsp;<img src="/src/assets/footer/github.svg" alt="" className='size-6 bg-white rounded-full'/>&nbsp;GitHub
            </div>
        </div>
    );
};

export default Footer;