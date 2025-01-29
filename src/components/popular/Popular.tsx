import data_product from "../assets/data";
import Item from "../items/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-[600]">POPULAR IN WOMEN</h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]"/>
      <div className="flex mt-12 gap-[30px]">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
