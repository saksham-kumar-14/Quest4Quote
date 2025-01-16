import React from 'react'

const Display: React.FC = () => {
    return(
        <div className='pt-[9.5vh] p-3'>
            <div className='grid grid-cols-2'>
                <div className='h-[356px] flex items-center justify-center flex-col'>
                    <h1 className='text-5xl font-black h-[50%] flex items-center justify-center'>
                        Quest4Quote streamlines RTQ process
                    </h1>
                    <p className='italic text-[#7b7a7a] h-[50%] flex items-center justify-center'>
                        Quest4Quote simplifies communication between suppliers and buyers
                    </p>

                </div>
                <div className='h-[100%] bg-slate-500'>
                </div>
            </div>

            <div className='grid grid-cols-2 h-[300px]'>
                <div id='about'>
                    <h1 className='h-[40%] underline font-bold text-3xl flex items-center justify-center'>About us</h1>
                    <div className='h-[60%] flex items-center justify-center  flex-col text-sm text-[#7b7a7a] italic'>
                        <p className='my-4'>
                        We are a company belonging to IIT Kharagpur with vision of making the RTQ process simpler.
                        </p>
                        <p className='my-4'>
                        After noticing the inefficiency of the RTQ process in heavy industries and witnessing the struggles of buyers in finding reliable vendors, we took the initiative and build this company.
                        </p>
                        <p className='my-4'>
                        Whether you're a buyer seeking reliable vendors or a vendor looking to  expand your reach, Quest4Quote is here to support you every step of the  way, and become your growth partner.
                        </p>
                    </div>
                </div>
                <div id='contact' className='flex flex-col fontsemibo items-center content-center'>
                    <h1 className='h-[40%] underline font-bold text-3xl flex items-center justify-center'>Contact Us</h1>
                    <p>
                        <div>
                            <span className='font-semibold'>email - </span>
                            <span className='text-[#50D04A]'>rfqsolutions@gmail.com</span>
                        </div>
                        <div>
                            <span className='font-semibold'>Contact No. - </span>
                            <span className='text-[#50D04A]'>9999999999</span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Display;