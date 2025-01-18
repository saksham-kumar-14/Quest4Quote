const ProductHeader: React.FC = () =>{
    return (
        <>
        <div className="flex-1 text-left font-medium bg-[#1AA566] grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
            <div className="p-2 py-3 text-sm border border-[#090D11] text-center">Vendor</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">Unit Rate</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">Quantity</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">Packaging</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">Frieght</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">GST</div>
            <div className="p-2 py-3 border text-sm text-bold border-[#090D11] text-center">Total</div>
        </div>
        </>
    );
}

export default ProductHeader;