import AddNewTab from "./AddNewTab";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import TabBar from "./TabBar";

export default function HotKeyActionTracker() {
  return (
    <section className="">
      <AddNewTab/>
      <TabBar />
      <div className="grid grid-cols-2 grid-rows-3 gap-4 min-h-120 px-4 pt-4 lg:max-w-[75%] mx-auto pb-4">
        <div className="col-start-1 row-start-1 row-span-2">
          <Box1 />
        </div>
        <div className="col-start-2 row-start-1 row-span-3">
          <Box2 />
        </div>
        <div className="col-start-1 row-start-3 row-span-1 ">
          <Box3 />
        </div>
      </div>
      <div className="col-start-1 col-span-2 row-start-6 row-span-6 px-4 lg:max-w-[75%] mx-auto">
        <Box4 />
      </div>
    </section>
  );
}
