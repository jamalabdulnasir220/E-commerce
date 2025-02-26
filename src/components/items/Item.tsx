import { Link } from "react-router";

interface ItemProp {
  id: number;
  image: string;
  name: string;
  newPrice: number;
  oldPrice: number;
}

const Item = ({ image, name, newPrice, oldPrice, id }: ItemProp) => {
  return (
    <div className="w-[280px] transform transition duration-[600ms] ease-in-out hover:scale-105 max-xl:w-[220px] max-xl:text-[14px] max-lg:w-[170px] max-lg:text-[13px] max-md:w-[120px] max-md:text-[12px] max-sm:w-[160px]">
      <Link to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={image}
          alt="image"
          className="object-contain w-[280px] max-xl:w-[220px] max-lg:w-[170px] max-md:w-[120px] text-[12px] max-sm:w-[160px]"
        />
      </Link>
      <p className="my-[6px] mx-0">{name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[#374151] text-[18px] font-[600px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px]">
          ${newPrice}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-medium line-through max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px]">
          ${oldPrice}
        </div>
      </div>
    </div>
  );
};

export default Item;
