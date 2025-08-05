const LoginBody:  React.FC = () => {
    return (
           <div className="px-40 flex mt-12 flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1">
            <h2 className="text-[#181411] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome back</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] h-14 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
                
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="Enter your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] h-14 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
             
                />
              </label>
            </div>
            <p className="text-[#887563] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Forgot Password?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#e57f19] text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Login</span>
              </button>
            </div>
            <p className="text-[#887563] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Dont have an account ?<a className="text-black" href="/signup">Sign up</a></p>
          </div>
        </div>
        
    )
}
export default LoginBody;