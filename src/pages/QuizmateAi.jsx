import React from "react";
import Icon from "../image/icon.png";

const QuizmateAi = () => {
  return (
    <section className="mx-auto mt-40 w-[650px]">
      <div className="text-white grid gap-8">
        <div className="flex justify-between items-end">
          <p>Scan your questions for an image</p>
          <div className="bg-[#1E293B] py-3 -mb-2 mr-6 rounded-xl  w-40 flex justify-around ">
            <button className="bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-4 py-2 rounded-lg mx-auto text-md">
              Misc
            </button>
            <button className="px-4 py-2 bg-[#091322] rounded-lg mx-auto">
              Math
            </button>
          </div>
        </div>
        <div>
          <div className="w-[625px] h-[263px] bg-[#1E293B] p-4 rounded-lg border border-[#9D69FF] border-dashed flex flex-col items-center justify-center ">
            <div className="">
              <img src={Icon} alt="" className="mx-auto" />
              <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF]">
                Drag image or click here to upload
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Or type...</p>
          <div className="w-[625px] h-[221px] bg-[#1E293B] p-4 rounded-lg border border-[#9D69FF] relative mt-4">
            <p className="text-[#64748B] ">Type your question here</p>
            <button className="absolute bottom-5 right-10 border bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-10 py-4 rounded-full border-none ">
              solve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizmateAi;
