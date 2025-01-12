const BasicDetails: React.FC = () => {
  return (
    <>
        <div className="grid-rows-2 h-[500px] bg-nones w-4/5 -my-16 mx-auto rounded-t-[30pxs]">
            <div className="grid grid-rows-2 h-full gap-2.5 p-3">
                <div className="grid grid-cols-[200px_1fr] gap-2.5">
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tl-[30px] p-5 bg-[#EBFCE3]">Row 1, Column 1</div>
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-tr-[30px] p-5 bg-[#EBFCE3]">Row 1, Column 2</div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">Row 2, Column 1</div>
                    <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">Row 2, Column 2</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BasicDetails;
