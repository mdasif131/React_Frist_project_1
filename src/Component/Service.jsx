import React from 'react'
import Control from '../assets/control.svg'
import scalable from '../assets/scalable.svg'
import flexible from '../assets/flexible.svg'
const Service = () => {
  const serviceArray = [
    {
      img: Control,
      title: `Your're in Control`,
      des: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
    },
    {
      img: scalable,
      title: 'Infinitely Scalable',
      des: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
    },
    {
      img: flexible,
      title: 'Incredibly Flexible',
      des: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-24'>
      {serviceArray.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" />
          <h1 className="text-white text-xl">{item.title}</h1>
          <p className="text-sm text-[#FFFFFF]/50 leading-tight">{item.des}</p>
        </div>
      ))}
    </div>
  );
}

export default Service