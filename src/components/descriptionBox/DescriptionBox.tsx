const DescriptionBox = () => {
  return (
    <div className="my-[60px] mx-[170px]">
      <div className="flex">
        <div className="flex items-center justify-center text-base font-semibold w-[121px] h-[60px] border border-[#d0d0d0]">Description</div>
        <div className="flex items-center justify-center text-base font-semibold w-[121px] h-[60px] border border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
      </div>
      <div className="flex flex-col gap-[18px] border border-[#d0d0d0] p-[36px] pb-[60px]">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          cupiditate vero aliquid impedit quas consectetur quidem repellendus.
          In dolor non repellat qui, consequuntur porro vero, nobis repellendus
          voluptates voluptatibus consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nihil
          rerum veritatis ipsam tenetur officiis veniam distinctio quisquam
          autem consequuntur, deserunt atque necessitatibus maiores impedit iure
          natus voluptates sapiente molestias.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
