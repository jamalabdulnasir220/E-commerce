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
    <div className="w-[350px] transform transition duration-[600ms] ease-in-out hover:scale-105">
      <Link to={`/product/${id}`}>
        <img src={image} alt="image" className="object-contain" />
      </Link>
      <p className="my-[6px] mx-0">{name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[#374151] text-[18px] font-[600px]">
          ${newPrice}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
          ${oldPrice}
        </div>
      </div>
    </div>
  );
};

export default Item;
