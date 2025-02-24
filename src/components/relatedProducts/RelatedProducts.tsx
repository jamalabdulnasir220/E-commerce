import data_product from "../assets/data";
import Item from "../items/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171717] text-[30px] font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]"/>
      <div className="mt-[50px] flex gap-[20px]">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              oldPrice={item.old_price}
              newPrice={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
