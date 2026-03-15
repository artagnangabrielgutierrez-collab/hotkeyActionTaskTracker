import {  useIsOpen } from "@/store/useGlobalStore";

interface Box3Props {
  hotkey: string;
}

export default function Box3({ hotkey }: Box3Props) {
  const setIsHotkeyEdit = useIsOpen((state) => state.setIsHotkeyEdit);
  return (
    <div className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe]  h-full">
      <div
        className="bg-[#000d1f] border border-[#3b82f6] rounded-lg p-3 w-full h-full flex flex-col
        group-hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)]
        transition-shadow duration-300 text-sm overflow-auto truncate"
      >
        Current HotKey / Keyboard key <br />
        <hr className="w-[99%] mx-auto border-[#3b82f6] mt-1" />
        <div
          className="bg-[#00040f] border border-[#1d4ed8] rounded-md p-2 mt-2 flex items-center justify-center flex-1 hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.3),4px_0_8px_0px_rgba(192,192,192,0.15),-4px_0_8px_0px_rgba(192,192,192,0.15)]
transition-shadow duration-300"
          onClick={() => setIsHotkeyEdit(true)}
        >
          <p className="text-md md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]  2xl:text-[4rem] tracking-widest">
            {hotkey}
          </p>
        </div>
      </div>
    </div>
  );
}
