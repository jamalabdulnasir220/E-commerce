import start_icon from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";

const ProductDisplay = ({ product }: any) => {
  return (
    <div className="flex  my-0 mx-[170px]">
      {/* LEFT */}
      <div className="flex gap-[17px]">
        {/* image list */}
        <div className="flex flex-col  gap-[16px]">
          <img
            className="flex-1 h-[163px] object-contain"
            src={product.image}
            alt="productImage"
          />
          <img
            className="flex-1 h-[163px] object-contain"
            src={product.image}
            alt="productImage"
          />
          <img
            className="flex-1 h-[163px] object-contain"
            src={product.image}
            alt="productImage"
          />
          <img
            className="flex-1 h-[163px] object-contain"
            src={product.image}
            alt="productImage"
          />
        </div>
        {/* main image */}
        <div className="w-[586px] h-full">
          <img
            src={product.image}
            alt="mainImage"
            className="h-full object-contain"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="my-0 mx-[70px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center mt-[6px] gap-1 text-[#1c1c1c] text-base">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[30px] mx-0 gap-[20px] text-base font-bold">
          <div className="line-through text-[#818181]">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          voluptatum itaque ipsam quidem quia doloribus voluptas natus possimus
          incidunt iusto dolore, modi ab dolor ea sit, alias et illo! Unde.
        </div>
        <div className="">
          <h1 className="mt-[35px] text-[#656565] text-base font-semibold">
            Select Size
          </h1>
          <div className="flex my-[20px] mx-0 gap-[10px]">
            <div className="py-[9px] px-[12px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="py-[9px] px-[12px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="py-[9px] px-[12px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="py-[9px] px-[12px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="py-[9px] px-[12px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button className="py-[10px] px-[20px] w-[200px] text-base font-semibold text-white bg-[#ff4141] mb-[20px] border-none outline-none cursor-pointer">
          ADD TO CART
        </button>
        <p className="mt-[5px] ">
          <span className="font-semibold">Category :</span>Women, T-Shirt, Crop
          Top
        </p>
        <p className="mt-[5px] ">
          <span className="font-semibold">Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
