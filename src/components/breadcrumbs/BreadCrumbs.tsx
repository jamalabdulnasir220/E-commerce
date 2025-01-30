import arrow_icon from "../assets/breadcrum_arrow.png";



const BreadCrumbs = ({ product }: any) => {
  return (
    <div className="flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[170px] capitalize">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrumbs;
