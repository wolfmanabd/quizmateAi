import React from 'react'
import img from '../image/Main Image.png'

const UploadedImage = () => {
  return (
    <section className="mx-auto mt-40 w-[650px]">
      <div className="text-white grid gap-8">
        <div className="flex justify-between items-end">
          <p>Scan your questions for an image</p>
          <div className="bg-[#1E293B] py-3 -mb-2 mr-6 rounded-xl  w-40 flex justify-around ">
            <button className="bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-4 py-2 rounded-lg mx-auto text-md">Misc</button>
            <button className="px-4 py-2 bg-[#091322] rounded-lg mx-auto">Math</button>
          </div>
        </div>
        <div >
          <div className="w-[625px] h-[220px] bg-[#1E293B] p-4 rounded-xl border border-[#9D69FF] border-dashed flex flex-col items-center justify-center ">
            <div className="">
              <img src={img} alt="" className="mx-auto"/>
            </div>
          </div>
          <div className="mt-8">
            <button className='text-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] px-12 py-3 rounded-2xl mt-2'>Submit</button>
          </div>
        </div>
        <div>
          <div className="w-[625px] h-[105px] bg-[#020617] p-4 rounded-xl border border-[#9D69FF] relative mt-4">
            <p>Solutions:</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadedImage
