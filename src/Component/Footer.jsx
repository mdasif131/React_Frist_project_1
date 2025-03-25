import React from 'react'
import footerLogo from '../assets/footerLogo.svg'
const Footer = () => {
  return (
    <footer className="p-4 sm:p-8 bg-[#07292F] py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4">
        <img src={footerLogo} alt="" />

        <p className="text-white/80 text-xs">
          Copyright &copy; {new Date().getFullYear()} All rights reserved.{' '}
        </p>
      </div>
    </footer>
  );
}

export default Footer