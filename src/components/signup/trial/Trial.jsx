import SignUp from "../SignUp";
export default function Trial() {
  return (
    <div
      className=" 
      py-[1.8rem]
      px-[6.6rem]
      rounded-[1rem] 
      bg-[#5e54a4] 
      shadow-[0_0.8rem_0_0_rgba(0,0,0,0.15)]"
    >
      <p
        className="text-center 
        text-[#fff] 
        text-[1.5rem] 
        font-medium 
        leading-[2.6rem] 
        tracking-[0.268px]"
      >
        Try it free 7 days
        <span className="font-normal"> then $20/mo. thereafter</span>
      </p>
    </div>
  );
}
