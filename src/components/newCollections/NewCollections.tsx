import new_collections from "../assets/new_collections";
import Item from "../items/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-[600]">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />
      <div className="grid grid-cols-4 mt-[50px] gap-[30px]">
        {new_collections.map((item) => {
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

export default NewCollections;
