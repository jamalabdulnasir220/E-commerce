import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex">
      {/* Hero left */}
      <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
        <h2 className="text-[#090909] text-[26px] font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] font-bold">new</p>
            <img src={hand_icon} alt="handicon" className="w-[105px]" />
          </div>
          <p className="text-[#171717] text-[100px] font-bold">collections</p>
          <p className="text-[#171717] text-[100px] font-bold">for everyone</p>
        </div>
        <div className="flex items-center justify-center gap-[15px] w-[310px] h-[70px] rounded-[75px] bg-[#ff4141] mt-[30px] text-white text-[22px] font-medium">
          <div>Lates collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      {/* Hero right */}
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

// bakcground: linear-gradient(180deg, #fde1ff, #e1ffea22 60%)
