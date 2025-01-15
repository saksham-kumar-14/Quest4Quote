import React from 'react'

const Display: React.FC = () => {
    return(
        <div>
            <div className='grid-cols-2'>
                <div className='grid-cols-1 h-56'>
                    <h1>
                        Quest4Quote streamlines RTQ process
                    </h1>
                    <p>
                        Quest4Quote simplifies communication between suppliers and buyers
                    </p>

                </div>
                <div className='h-[100%] bg-slate-500'>

                </div>
            </div>

            <div>
                <div>
                    <h1>About us</h1>
                    <div>
                        <p>
                        We are a company belonging to IIT Kharagpur with vision of making the RTQ process simpler.
                        </p>
                        <p>
                        After noticing the inefficiency of the RTQ process in heavy industries and witnessing the struggles of buyers in finding reliable vendors, we took the initiative and build this company.
                        </p>
                        <p>
                        Whether you're a buyer seeking reliable vendors or a vendor looking to  expand your reach, Quest4Quote is here to support you every step of the  way, and become your growth partner.
                        </p>
                    </div>
                </div>
                <div className='flex items-center content-center'>
                    <h1>Contact Us</h1>
                    <p>
                        <div>
                            <span>email - </span>
                            <span>rfqsolutions@gmail.com</span>
                        </div>
                        <div>
                            <span>Contact No. - </span>
                            <span>9999999999</span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Display;