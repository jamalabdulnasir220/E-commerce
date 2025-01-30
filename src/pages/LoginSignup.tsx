import React from "react";

const LoginSignup = () => {
  return (
    <div className="bg-[#fce3f3] w-full h-[90vh] pt-[60px]">
      <div className="w-[500px] h-[550px] bg-white m-auto py-[40px] px-[40px]">
        <h1 className="my-[10px] mx-0">Sign Up</h1>
        <div className="flex flex-col gap-[20px] mt-[30px]">
          <input
            className="h-[58px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[16px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[58px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[16px]"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-[58px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[16px]"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="w-full h-[58px] text-white bg-[#ff4141] mt-[20px] border-none text-xl font-medium cursor-pointer">Continue</button>
        <p className="mt-[10px] text-[#5c5c5c] text-[16px] font-medium">
          Already have an account? <span className="text-[#ff4141] font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-[20px] gap-[10px]  text-[#5c5c5c] text-[15px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
