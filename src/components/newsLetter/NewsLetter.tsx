const NewsLetter = () => {
  return (
    <div
      className="w-[65%] m-auto h-[40vh] flex flex-col items-center justify-center px-[140px] py-0 
    mb-[150px] bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] gap-[30px]"
    >
      <h1 className="text-[#454545] text-[45px] font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px]">
        Subscribe to our newsletter and stay updated.
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your email id"
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px]"
        />
        <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
