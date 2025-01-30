import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/items/Item";

interface PropType {
  category: string;
  banner: string;
}

const ShopCategory = ({ category, banner }: PropType) => {
  const all_product = useContext(ShopContext);

  return (
    <div>
      <img
        className="block my-[30px] mx-auto w-[82%]"
        src={banner}
        alt="banner"
      />
      {/* Shop category index sort */}
      <div className="flex my-0 mx-[170px] justify-between items-center">
        <p className="">
          <span className="font-semibold">Showing 1 - 12</span> out of 36 Products
        </p>
        <div className="py-[10px] px-[20px] rounded-[40px] border border-[#888] flex items-center justify-center gap-1.5">
          Sort by <img className="cursor-pointer flex items-center justify-center" src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      {/* shop category products */}
      <div className="my-[20px] mx-[170px] grid grid-cols-3 gap-y-[80px] gap-x-[40px]">
        {all_product?.all_product.map((item) =>
          item.category === category ? (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              oldPrice={item.old_price}
              newPrice={item.new_price}
            />
          ) : null
        )}
      </div>
      <div className="bg-[#ededed] text-[#787878] text-[18px] font-medium flex items-center justify-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px]">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
