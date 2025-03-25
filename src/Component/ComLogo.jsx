import React from 'react';
import BackHub from '../assets/BackHub.svg';
import CableLabs from '../assets/CableLabs.svg';
import DBS from '../assets/DBSlogo.svg';
import EasyEuro from '../assets/EasyEurologo.svg';
import AMDlogo from '../assets/AMDlogo.svg';
const ComLogo = () => {
 

  return (
    <section className="bg-[#07292F] py-8 mx-auto mb-20">
      <h5 className="text-center text-primary text-sm">OUR TRUSTED PARTNERS</h5>
      <div className='grid grid-cols-2 md:grid-cols-5 h-auto  items-center justify-center w-[80%] mx-auto'>
        <img src={BackHub} alt="" />
        <img src={CableLabs} alt="" />
        <img src={DBS} alt="" />
        <img src={EasyEuro} alt="" />
        <img className='' src={AMDlogo} alt="" />
      </div>
    </section>
  );
};

export default ComLogo;
