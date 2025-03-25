import React from 'react'

const Train = () => {
  return (
    <section className="p-8 ">
      <div className='bg-[#02242a] bg-[url("/bgCO.png")] object-contain  bg-cover  bg-center sm:md:bg-[url("/BG1.png")] sm:bg-content sm:object-left bg-no-repeat py-10 px-5 space-y-6 rounded-2xl bg-scroll '>
        <div className="flex flex-col items-center justify-center text-center space-y-6  mx-auto">
          <div>
            <h1 className="text-[1.4rem] md:text-[40px] text-white font-bold">
              Train your aiDR on your...
            </h1>
            <h2 className="text-[1.4rem] md:text-[40px] text-primary">
              prefered email st|
            </h2>
          </div>
          <p className="text-white md:text-[24px] max-w-[500px]">
            You&apos;re in control. Train your aiDR on elements of your
            Marketing strategy.
          </p>

          <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 items-center gap-4 mx-auto">
            <p className="flex gap-2 text-secondary">
              <img
                className="w-fit max-w-[24px] max-h-[24px]"
                src="/cheekbox.png"
                alt=""
              />
              <span>Quick to ramp</span>
            </p>
            <p className="flex gap-2 text-secondary">
              <img
                className="w-fit max-w-[24px] max-h-[24px]"
                src="/cheekbox.png"
                alt=""
              />
              <span>Easy to optimize</span>
            </p>
            <p className="flex gap-2 text-secondary">
              <img
                className="w-fit max-w-[24px] max-h-[24px]"
                src="/cheekbox.png"
                alt=""
              />
              <span>Quick to scale up</span>
            </p>
            <p className="flex gap-2 text-secondary ">
              <img
                className="w-fit max-w-[24px] max-h-[24px]"
                src="/cheekbox.png"
                alt=""
              />
              <span>Works with all your existing tools</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Train