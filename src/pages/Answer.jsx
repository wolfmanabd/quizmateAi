import React from 'react'

const Answer = () => {
  return (
    <section className="mx-auto mt-40 w-[650px]">
      <div className="">
        <div className="text-white grid gap-8">
          <div className="w-[625px] h-[145px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B] ">
            <div>
              <p>Question: Who wrote the novel "Pride and Prejudice"</p>
              <p>A. Charles Dickens</p>
              <p>B. Williams Shakespeare</p>
              <p>C. Jane Austin</p>
              <p>D. Emilly Bronte</p>
              <p><span>Corrent Answer:</span> C. Jane Austin <span>Expand</span></p>
            </div> 
          </div>
          <div className="w-[625px] h-[145px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B]  ">
          <div>
              <p>Question: What is the capital city of Canada?</p>
              <p>A. Vancouver</p>
              <p>B. Ottawa</p>
              <p>C. Toronto</p>
              <p>D. Montreal</p>
              <p><span>Corrent Answer:</span> B. Ottawa <span>Expand</span></p>
            </div> 
          </div>
          <div className="w-[625px] h-[145px] bg-[#020617] p-4 rounded-lg border border-[#9D69FF]  flex flex-col text-sm text-[#64748B]  ">
          <div>
              <p>Question: What is the capital city of France?</p>
              <p>A. Berlin</p>
              <p>B. London</p>
              <p>C. Paris</p>
              <p>D. Rome</p>
              <p><span>Corrent Answer:</span> C. Paris <span>Expand</span></p>
            </div> 
          </div>
          <div className="">
            <button className='text-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-12 py-3 rounded-2xl mt-2'>Done</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Answer
