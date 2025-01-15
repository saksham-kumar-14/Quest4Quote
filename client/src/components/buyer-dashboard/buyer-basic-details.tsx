const BasicDetails: React.FC = () => {
  return (
    <>
        <div className="grid-rows-2 h-[400px] bg-nones w-4/5 -mt-16 mb-0 mx-auto rounded-t-[30pxs] font-poppins">
            <div className="grid grid-rows-2 h-full gap-2.5 p-3">
            <div className="grid grid-cols-[200px_1fr] gap-2.5">
                <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tl-[30px] p-5 bg-[#EBFCE3]">
                    Basic Details No heading
                </div>
                <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tr-[30px] p-5 bg-[#EBFCE3]">
                    <div style={{color: 'blue', fontSize: '22px'}}>
                        Organisation Details
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
                <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">
                    <div style={{color: 'blue', fontSize: '22px'}}>
                        Contact Details
                    </div>
                </div>
                <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">
                    <div style={{color: 'blue', fontSize: '22px'}}>
                        About
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default BasicDetails;
