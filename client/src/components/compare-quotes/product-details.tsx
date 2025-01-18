interface props {
    vendorName: string,
    unitRate: number,
    quantity: number,
    packaging: number,
    frieght: number,
    gst: number,
    selected: boolean;
}

const ProductDetails: React.FC<props> = ({vendorName, unitRate, quantity, packaging, frieght, gst, selected}) =>{
    return (
        <>
        <div className={`flex-1 text-left font-medium grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] 
            ${selected ? 'bg-[#6AFAA8]' : 'bg-white'}`}>
        <div className="p-2 py-3 text-sm font-bold border border-[#090D11] text-center">{vendorName}</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{unitRate}</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{quantity}</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{packaging}%</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{frieght}%</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{gst}%</div>
        <div className="p-2 py-3 border text-sm border-[#090D11] text-center">{unitRate * quantity * (1 + (packaging + frieght + gst) / 100)}</div>
        </div>
        </>
    );
}

export default ProductDetails;