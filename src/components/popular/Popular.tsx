import data_product from "../assets/data";
import Item from "../items/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] max-xl:h-[70vh] max-lg:h-[60vh] max-md:h-[50vh] max-md:gap-1.5 max-sm:h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-[600] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px]">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525] max-xl:w-[160px] max-xl:h-1 max-lg:w-[120px] max-lg:h-[3px] max-md:w-[100px]" />
      <div className="flex mt-12 gap-[30px] max-xl:gap-[20px] max-xl:mt-[30px] max-lg:gap-[15px] max-lg:mt-[20px] max-md:gap-[5px] max-sm:grid max-sm:grid-cols-[1fr_1fr] max-sm:gap-[20px]">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
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
