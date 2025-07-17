import Trial from "./trial/Trial";
export default function SignUp() {
  const signUpForm = ["First Name", "Last Name", "Email Address", "Password"];
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <Trial />
      <form
        action="/signup"
        className="flex flex-col gap-[1.6rem] p-[2.4rem] bg-[#fff]
        rounded-[1rem] shadow-[0_0.8rem_0_0_rgba(0,0,0,0.15)]"
      >
        {signUpForm.map((form) => {
          return (
            <div
              key={form}
              className="py-[1.5rem] border-solid border border-[#dedede]
              rounded-[0.5rem] pl-[1.9rem]"
            >
              <label htmlFor={form}></label>
              <input
                type="text"
                id={form}
                name={form}
                placeholder={form}
                required
                className="text-[1.4rem] font-[600] outline-none
                leading-[2.6rem]
                tracking-[0.25px]"
              />
            </div>
          );
        })}
        <div className="flex flex-col w-full text-center gap-[0.8rem]">
          <button
            className="py-[1.5rem] px-[4.4rem] text-center
            bg-[#38cc8B]
            shadow-[0_-0.4rem_0_0_rgba(0,0,0,0.09)_inset]
            rounded-[0.5rem]
            text-[1.5rem] text-[#fff]
            font-[600] leading-[2.6rem] tracking-[0.1rem] cursor-[pointer]"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="text-[#bab7d4] text-[1.1rem] font-[500] leading-[2.1rem]">
            By clicking the button, you are agreeing to our
            <span className="font-[700] text-[#ff7979]">
              {" "}
              Terms and Services
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
