export default function Box1() {
  return (
    <div className="group bg-[#1a1b2e] border border-[#414868] rounded-lg text-[#c0caf5] p-3 h-full">
      <div
        className="bg-[#2a2b3e] border border-[#565f89] rounded-lg p-3 w-full h-full flex flex-col
        group-hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.1),4px_0_8px_0px_rgba(192,192,192,0.05),-4px_0_8px_0px_rgba(192,192,192,0.05)]
        transition-shadow duration-300 text-md "
      >
        Progress
        <hr className="w-[99%] mx-auto t border-white mt-1" />
        <div className="w-full h-[55%]  bg-[#1a1b2e] border-4 border-slate-400 rounded-md mt-4">
          <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 flex flex-col items-center justify-center gap-8">
            <span>
              progress
            </span>
            api
            quote
          </div>
        </div>
        <button className="mt-4 mx-auto w-[50%] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-4 py-2 rounded-lg border border-cyan-400/50 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
          Increase
        </button>
      </div>
    </div>
  );
}
