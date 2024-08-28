import React from "react";
import { LuExpand } from "react-icons/lu";

const AnswerExpanded = () => {
  return (
    <section className="mx-auto mt-40 w-[650px]">
      <div className="">
        <div className="text-white grid gap-8">
          <div className="w-[625px] h-[206px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B] ">
            <div className="relative">
              <p className="text-sm"><span className="border border-[#9D69FF] rounded-full px-1 mb-12 absolute top-0 right-0">X</span> </p>
              <p className="mt-8">
                The correct answer is B. Jane Austen because she is the author
                of the novel "Pride and Prejudice." Jane Austen was an English
                novelist who lived in the 18th and 19th centuries and is
                renowned for her novels exploring themes of love, social class,
                and marriage in British society. "Pride and Prejudice" is one of
                her most famous works, portraying the lives and relationships of
                the English gentry during the Regency era. Charles Dickens,
                William Shakespeare, and Emily Brontë are all acclaimed authors
                in their own right, but they did not write "Pride and
                Prejudice."
              </p>
            </div>
          </div>
          <div className="w-[625px] h-[145px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B]  ">
            <div className="relative">
              <p>Question: What is the capital city of Canada?</p>
              <p>A. Vancouver</p>
              <p>B. Ottawa</p>
              <p>C. Toronto</p>
              <p>D. Montreal</p>
              <p className="text-green-500">
                <span className="font-bold">Corrent Answer:</span> C. Jane
                Austin{" "}
                <span className="absolute  right-0 text-[#64748B] ">
                  {" "}
                  <LuExpand className="inline-block" /> Expand
                </span>
              </p>
            </div>
          </div>
          <div className="w-[625px] h-[145px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B]  ">
            <div className="relative">
              <p>Question: What is the capital city of France?</p>
              <p>A. Berlin</p>
              <p>B. London</p>
              <p>C. Paris</p>
              <p>D. Rome</p>
              <p className="text-green-500">
                <span className="font-bold">Corrent Answer:</span> C. Jane
                Austin{" "}
                <span className="absolute  right-0 text-[#64748B] ">
                  <LuExpand className="inline-block" /> Expand
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <button className="text-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-12 py-3 rounded-2xl mt-2">
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerExpanded;
