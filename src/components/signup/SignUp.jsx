import Trial from "./trial/Trial";
import { useState } from "react";
export default function SignUp() {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    "First Name": "",
    "Last Name": "",
    "Email Address": "",
    Password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    for (const key in formValues) {
      if (!formValues[key].trim()) {
        newErrors[key] = `${key} can not be empty`;
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = formValues["Email Address"];
    if (email.trim() && !emailRegex.test(email)) {
      newErrors["Email Address"] = `Looks like this is not an email`;
    }
    setErrors(newErrors);
  }
  const signUpForm = ["First Name", "Last Name", "Email Address", "Password"];
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <Trial />
      <form
        action="/signup"
        className="flex flex-col gap-[1.6rem] p-[2.4rem] bg-[#fff]
        rounded-[1rem] shadow-[0_0.8rem_0_0_rgba(0,0,0,0.15)]
        xl:p-[4rem] xl:gap-[2rem]"
        onSubmit={handleSubmit}
      >
        {signUpForm.map((form) => {
          return (
            <div key={form}>
              <div
                className="py-[1.5rem] border-solid border border-[#dedede]
              rounded-[0.5rem] pl-[1.9rem] 
              flex flex-row justify-between pr-[2.7rem]
              "
              >
                <input
                  type="text"
                  id={form}
                  name={form}
                  placeholder={form}
                  className="text-[1.4rem] font-[600] outline-none
                leading-[2.6rem]
                tracking-[0.25px]"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {errors[form] ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FF7979" />
                    <rect
                      x="11"
                      y="6"
                      width="2"
                      height="9"
                      rx="1"
                      fill="white"
                    />
                    <rect
                      x="11"
                      y="17"
                      width="2"
                      height="2"
                      rx="1"
                      fill="white"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
              {errors[form] ? (
                <p
                  className="text-right font-[1.1rem] 
                  text-[#ff7979] italic font-[500] mt-[0.6rem]
                 "
                >
                  {errors[form]}
                </p>
              ) : (
                ""
              )}
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
          <p className="text-[#bab7d4] text-[1.1rem] font-[500] leading-[2.1rem] xl:leading-[2.6rem] px-[1.5rem]">
            By clicking the button, you are agreeing to our
            <span className="font-[700] text-[#ff7979] cursor-[pointer]">
              {" "}
              Terms and Services
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
