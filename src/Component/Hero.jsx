import { Button } from '@heroui/react';
import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

const Hero = () => {
  return (
    <section className='bg-[url("/Heroim.png")] bg-cover object-cover bg-no-repeat bg-center max-h-[400px] h-screen'>
      <div className="mx-auto px-6  md:px-24 md:-8 lg-14">
        <div className="flex flex-col items-start justify-center space-y-8">
         
          <div>
            <p className="text-primary text-medium  ">{'AI SDRs (aiDRs)'}</p>
            <h1 className="text-white text-4xl md:text-6xl  lg:max-w-[500px]  ">
              <span className="font-bold">More</span> leads,
              <span className="font-bold"> less</span> people
            </h1>
          </div>
          <p className="text-[#FFFFFF] text-sm max-w-[350px]">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
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
      </div>
    </section>
  );
};

export default Hero;
