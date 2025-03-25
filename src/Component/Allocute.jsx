// import React from 'react';

// const Allocute = () => {
//   return (
//     <section className="">
//       <div className=" relative w-full h-auto
//        bg-[#07292F]  flex flex-col items-center justify-center">
//         <img
//           src="/allocatebg.svg"
//           alt=""
//           className="absolute -left-4 top-0  w-full h-full object-cover mix-blend-overlay block z-10 filter brightness-200"
//         />
//         <div>
//           <h1 className="text-white font-bold text-3xl">
//             Allocate effort where your reps make an inpact.
//           </h1>
//           <h2 className="text-primary">Let us handle the rest.</h2>
//           <p className="text-white">
//             Keep your reps “in the air” -- out in the field and on the phone
//             where they can build relationships.
//           </p>
//         </div>
//         <div className="text-white">
//           <div>
//             <h1>32%</h1>
//             <p>Improvement in Open Rates</p>
//           </div>
//           <div>
//             <h1>75%</h1>
//             <p>Improvement in Ramp Time</p>
//           </div>
//           <div>
//             <h1>35%</h1>
//             <p>Improvement in Meetings Booked</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Allocute;
import React from 'react';

const ImpactStats = ({ stats }) => {
  return (
    <div className="p-8 ">
      <section className="relative w-full min-h-[400px]  overflow-hidden rounded-2xl">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 p-6 ">
          <div className="absolute inset-0 bg-[url('/allocateSMbg.png')] bg-center sm:bg-[url('/allocatebg.png')] bg-cover sm:bg-cover "></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-xl p-4 md:pl-24 py-4 flex flex-col items-start justify-start  gap-12">
          {/* Left Column - Text */}
          <div className="flex-1 space-y-6 text-white">
            <h1 className="text-4xl font-bold leading-tight">
              Allocate effort where your reps make an{' '}
              <span className="text-primary">impact</span>.
            </h1>
            <h2 className="text-2xl text-primary font-medium">
              Let us handle the rest.
            </h2>
            <p className="text-lg opacity-90 max-w-md">
              Keep your reps “in the air” — out in the field and on the phone
              where they can build relationships.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 ">
            {stats.map((stat, index) => (
              <div key={index} className=" p-6  transition-all">
                <h3 className="text-primary text-[2rem] font-bold mb-2">
                  {stat.value}%
                </h3>
                <p className="text-white/90 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};



 const Allocute = () => {
   const statsData = [
     { value: 32, label: 'Improvement in Open Rates' },
     { value: 75, label: 'Improvement in Ramp Time' },
     { value: 35, label: 'Improvement in Meetings Booked' },
   ];

   return <ImpactStats stats={statsData} />;
 };

 export default Allocute;