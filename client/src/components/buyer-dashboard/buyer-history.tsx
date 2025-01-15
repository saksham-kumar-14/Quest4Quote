const BuyerHistory: React.FC = () => {
    return (
      <>
        <div className="grid mx-[45px] h-[300px] grid-cols-[1fr_1fr_1fr] gap-2.5 -mt-[3px] z-10">
            <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-bl-[30px] p-5 bg-[#EBFCE3]">
                <div className="text-blue-800 text-lg">
                    Past RFQs
                </div>
            </div>
            <div className="col-span-1 border-[5px] border-[#6AFAA8] p-5 bg-[#EBFCE3]">
                <div className="text-blue-800 text-lg">
                    Past Quotes
                </div>
            </div>
            <div className="col-span-1 border-[5px] border-[#6AFAA8] rounded-br-[30px] p-5 bg-[#EBFCE3]">
                <div className="text-blue-800 text-lg">
                    Past Ratings
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default BuyerHistory;
  