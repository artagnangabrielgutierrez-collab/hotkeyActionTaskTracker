export default function Box2() {
  return (
    <div className="group bg-[#1a1b2e] border border-[#414868] rounded-lg text-[#c0caf5] p-3 h-full">
      <div
        className="bg-[#2a2b3e] border border-[#565f89] rounded-lg p-3 w-full h-full
        group-hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.1),4px_0_8px_0px_rgba(192,192,192,0.05),-4px_0_8px_0px_rgba(192,192,192,0.05)]
        transition-shadow duration-300 text-md flex flex-col"
      >
        Completion History
        <hr className="w-[99%] mx-auto t border-white mt-1" />
      </div>
    </div>
  );
}
