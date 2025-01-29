import foooter_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={foooter_logo} alt="footerLogo" />
        <p className="text-[#383838] text-[46px] font-bold">SHOPPER</p>
      </div>
      <ul className="flex gap-[50px] text-[20px] text-[#252525]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px]">
        <div className="bg-[#fbfbfb] border border-[#ebebeb] p-[10px] pb-[6px]">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="bg-[#fbfbfb] border border-[#ebebeb] p-[10px] pb-[6px]">
          <img src={pinterest_icon} alt="pinterest_icon" />
        </div>
        <div className="bg-[#fbfbfb] border border-[#ebebeb] p-[10px] pb-[6px]">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
