import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex max-sm:flex-col">
      {/* Hero left */}
      <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1] max-xl:pl-[100px] max-lg:pl-[80px] max-md:pl-[30px]">
        <h2 className="text-[#090909] text-[26px] font-semibold max-xl:text-[22px] max-lg:text-[20px] max-md:text-base max-sm:text-[18px]">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]">
              new
            </p>
            <img
              src={hand_icon}
              alt="handicon"
              className="w-[105px] max-xl:w-[80px] max-lg:w-[65px] max-md:w-[50px] max-sm:w-[55px]"
            />
          </div>
          <p className="text-[#171717] text-[100px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]">
            collections
          </p>
          <p className="text-[#171717] text-[100px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]">
            for everyone
          </p>
        </div>
        <div className="flex items-center justify-center gap-[15px] w-[310px] h-[70px] rounded-[75px] bg-[#ff4141] mt-[30px] text-white text-[22px] font-medium max-xl:gap-[10px] max-xl:w-[250px] max-xl:h-[60px] max-xl:mt-[20px] max-xl:text-[18px] max-lg:w-[220px] max-lg:h-[50px] max-lg:text-base max-md:w-[175px] max-md:h-[40px] max-md:text-[13px] max-sm:w-[200px] max-sm:h-[45px] max-sm:text-[14px]">
          <div>Lates collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      {/* Hero right */}
      <div className="flex-1 flex items-center justify-center max-sm:hidden">
        <img
          src={hero_image}
          alt=""
          className="max-xl:w-[500px] max-lg:w-[400px] max-md:w-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;

// bakcground: linear-gradient(180deg, #fde1ff, #e1ffea22 60%)
