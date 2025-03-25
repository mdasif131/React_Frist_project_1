import { Button } from '@heroui/react';
import React from 'react'
import { GoLinkExternal } from 'react-icons/go';
const Embrace = () => {
  return (
    <section className="p-4 sm:p-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h3 className="text-primary">GET STARTED</h3>
        <h1 className="text-white text-3xl md:text-4xl text-center font-[500]">
          Embrace the <span className="font-bold"> new era of</span> outbound.
        </h1>
        <p className="text-white/90 text-sm text-center max-w-md">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>
        <Button
          color="primary"
          radius="full"
          variant="shadow"
          className="text-black transform hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Sign Up for the Beta
          <GoLinkExternal />
        </Button>
      </div>
    </section>
  );
}

export default Embrace