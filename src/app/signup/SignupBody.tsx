"use client";

import { useActionState } from "react";

const Body: React.FC = () => {
  const [data, action] = useActionState(handleSubmit, undefined);

  async function handleSubmit(previousStates: unknown, formdata: FormData) {
    const name = formdata.get("name") as string;
    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;
    const isChecked = formdata.get("terms") !== null;
    const payLoad = { name, email, password, isChecked };
console.log(payLoad);
    // const res = await fetch("https://your-api.com/endpoint", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payLoad),
    // });
    // const result = res.json();
    return { fieldData: payLoad };
  }
  return (
    <div className="layout-container flex h-full mt-12 grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1">
          <h2 className="text-[#181411] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Create your account
          </h2>
          <form action={action}>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  defaultValue={data?.fieldData?.name}
                  name="name"
                  placeholder="Full Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-14 placeholder:text-[#897561] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  name="email"
                  defaultValue={data?.fieldData?.email}
                  placeholder="Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-14 placeholder:text-[#897561] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  defaultValue={data?.fieldData?.password}
                  name="password"
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-14 placeholder:text-[#897561] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  defaultChecked={data?.fieldData?.isChecked}
                  name="terms"
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#e77c12] checked:bg-[#e77c12] checked:border-[#e77c12] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p className="text-[#181411] text-base font-normal leading-normal">
                  I agree to the Terms of Service and Privacy Policy
                </p>
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                type="submit"
                className="flex text-white min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#e57f19]  text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign up</span>
              </button>
            </div>
          </form>
          <p className="text-[#887563] underline text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Already have an account?{" "}
            <a className="text-black" href="/login">
              Log in

            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
